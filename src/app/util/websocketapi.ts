import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket'
import {getBackendUrl} from './getbackendurl';
import { RxStompService } from '@stomp/ng2-stompjs';
import { BattleGroundEvent } from '../pages/live/model/battlegroundevent';
import { Injectable } from '@angular/core';
import { Message } from 'stompjs';
import { GenericResponse, GenericElementOrdering } from './genericresponse';

@Injectable({
  providedIn: 'root'
})
export class EventWebSocketAPI {

	public topic = '/matches/events';

    public constructor(private rxStompService: RxStompService) { }
    

	public subscribe<T>(handlerFunction: (param: BattleGroundEvent, classRef: T) => void, classRef: T): void {
		this.rxStompService.watch(this.topic).subscribe((message: Message) => {
			try {
				const jsonData = JSON.parse(message.body);
				//const events = this.checkAndPossiblyResend(jsonData);
				const genericData = jsonData as GenericElementOrdering<BattleGroundEvent>;
				handlerFunction(genericData.element, classRef);
			} catch (error) {
				console.log('error found for chatMessages: ' + message.body + ' with error ' + error);
				console.log(error.stack);
			}
		});
	}

    eventIndex = null;
    createHandlerFunctionFromEventFunction(eventHandlerFunction: (param: any) => void) {
		const eventWebsocketAPIRef = this;
  		const result = function(chatMessages) {
				try {
					const jsonData = JSON.parse(chatMessages.body);
					const events = eventWebsocketAPIRef.checkAndPossiblyResend(jsonData);
					if (events != null) {
						for (const event of events) {
							eventHandlerFunction(event.element);
						}
					}
				} catch (error) {
					console.log('error found for chatMessages: ' + chatMessages.body + ' with error ' + error);
					console.log(error.stack);
                }
            };

  		return result;
	}
	
	protected checkAndPossiblyResend(jsonData): any {
		let events = null;
		if (this.eventIndex == null) {
			this.eventIndex = jsonData.id;
		} else if (jsonData.id !== (this.eventIndex + 1)) {
			const ids = [];
			for (let i = this.eventIndex + 1; i < jsonData.id; i++) {
				ids.push(i);
			}
			console.log('missing ids' + ids.join() + ' getting remission from the server');
			events = this.manuallyCallToRetrieveEvent(ids);
			this.eventIndex = jsonData.id;
		} else {
			this.eventIndex = jsonData.id;
		}

		return events;
	}

	manuallyCallToRetrieveEvent(indexes): any {
		let events = null;
		$.ajax({
			url: getBackendUrl() + 'api/matches/currentData?ids=" + indexes.join()',
			async: false,
			success(result) {
				events = result;
		}});

	}

	manuallyReconnectToServer(): void {
		setInterval(function() {
			$.ajax({
				url: getBackendUrl() + 'api/matches/health',
				type: 'GET',
				dataType: 'json',
				success(data) {
					// if successful at calling healthcheck, reload the page
					location.reload();
				},
				error(error) {
					console.log('Error reconnecting to server');
				}
			});
		}, 30000);
	}

}

export class StompWebSocketAPI {
	webSocketEndPoint: string;
	topic: string;
	stompClient: any;
	handlerFunction: (param: any) => void;
	errorFunction: (error: string) => void;

	constructor(webSocketEndPoint: string, topic: string, handlerFunction: (param: any) => void, errorFunction: (param: any) => void) {
		this.webSocketEndPoint = webSocketEndPoint;
		this.topic = topic;
		this.handlerFunction = handlerFunction;
		this.errorFunction = errorFunction;
	}

	_connect() {
		console.log('Initialize WebSocket Connection');
		const ws = new SockJS(this.webSocketEndPoint);
		this.stompClient = Stomp.Stomp.over(ws);
		const websocketRef = this;
		this.stompClient.connect({}, function(frame) {
			websocketRef.stompClient.subscribe(websocketRef.topic, this.handlerFunction);
		}, this.errorFunction);
    }

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log('Disconnected');
    }
}
