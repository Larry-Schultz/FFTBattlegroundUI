import { Component, OnInit, OnChanges } from '@angular/core';
import * as $ from 'jquery';

import { getBackendUrl } from 'src/app/util/getbackendurl';
import { EventWebSocketAPI } from 'src/app/util/websocketapi';
import { BattleGroundEvent } from 'src/app/pages/live/model/BattleGroundEvents/battlegroundevent';
import { BettingBeginsEvent } from 'src/app/pages/live/model/BetEvents/bettingbeginsevent';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { getColor } from 'src/app/util/colorsetter';
import { BattleGroundEventType } from 'src/app/pages/live/model/BattleGroundEvents/battlegroundeventtype';
import { BettingEndsEvent } from 'src/app/pages/live/model/BetEvents/bettingendsevent';
import { capitalize } from 'lodash';
import { GenericResponse, GenericElementOrdering } from 'src/app/util/genericresponse';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {

  public event: BattleGroundEvent;

  constructor(private eventWebSocketAPI: EventWebSocketAPI) { }

  public ngOnInit(): void {
    this.pullCurrentData();
    this.eventWebSocketAPI.subscribe<MenuComponent>(this.parseEvents, this);
  }

  public ngOnChanges(): void {
  }

  public getSwaggerUrl(): string {
    return getBackendUrl() + 'swagger-ui/#/home-controller';
  }

    public getTeamColor(team: Allegiance) {
    const color = getColor(team);
    return color;
  }

	public pullCurrentData(): any {
		const menuComponentRef: MenuComponent = this;
		$.ajax({url: getBackendUrl() + 'api/matches/currentMenuData',
			success(result: GenericResponse<GenericElementOrdering<BattleGroundEvent>[]>) {
        result.data.sort((a, b) => (a.id > b.id) ? 1 : -1);


        result.data.map((event: GenericElementOrdering<BattleGroundEvent>): void => {
          menuComponentRef.parseEvents(event.element, menuComponentRef);
        });
		}});
	}

  public parseEvents(event: BattleGroundEvent, classRef: MenuComponent): void {
    switch (event.eventType) {
      case 'BETTING_BEGINS': case 'BETTING_ENDS': case 'FIGHT_BEGINS':
        classRef.event = event;
        break;
      default:
        break;
    }
  }

  public extractTeam1Name(event: BattleGroundEvent): string {
    const allegiance: Allegiance = this.extractTeam1Allegiance(event);
    const str = capitalize(allegiance.toLocaleLowerCase());
    return str;
  }

  public extractTeam1Allegiance(event: BattleGroundEvent): Allegiance {
    if (!event) {
      return null;
    } else if (event.eventType === BattleGroundEventType.BETTING_BEGINS) {
      const bettingBeginsEvent = event as BettingBeginsEvent;
      return bettingBeginsEvent.team1;
    } else if(event.eventType === BattleGroundEventType.BETTING_ENDS) {
      const bettingBeginsEvent = event as BettingEndsEvent;
      return bettingBeginsEvent.team1;
    } else {
      return null;
    }
  }

  public extractTeam2Name(event: BattleGroundEvent): string {
    const allegiance: Allegiance = this.extractTeam2Allegiance(event);
    const str = capitalize(allegiance.toLocaleLowerCase());
    return str;
  }

  public extractTeam2Allegiance(event: BattleGroundEvent): Allegiance {
    if (!event) {
      return null;
    } else if (event.eventType === BattleGroundEventType.BETTING_BEGINS) {
      const bettingBeginsEvent = event as BettingBeginsEvent;
      return bettingBeginsEvent.team2;
    } else if(event.eventType === BattleGroundEventType.BETTING_ENDS) {
      const bettingBeginsEvent = event as BettingEndsEvent;
      return bettingBeginsEvent.team2;
    } else {
      return null;
    }
  }

  public isBettingBeginsEvent(event: BattleGroundEvent): boolean {
    if (!event) {
      return false;
    }
    const result = event.eventType === BattleGroundEventType.BETTING_BEGINS;
    return result;
  }

    public isBettingEndsEvent(event: BattleGroundEvent): boolean {
    if (!event) {
      return false;
    }
    const result = event.eventType === BattleGroundEventType.BETTING_ENDS;
    return result;
  }

  public isFightBegins(event: BattleGroundEvent): boolean {
    if (!event) {
      return false;
    }
    const result = event.eventType === BattleGroundEventType.FIGHT_BEGINS;
    return result;
  }

}
