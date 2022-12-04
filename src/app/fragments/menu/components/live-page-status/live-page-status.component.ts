import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Allegiance } from 'src/app/model/PlayerRecord/Allegiance';
import { BattleGroundEvent } from 'src/app/pages/live/model/BattleGroundEvents/battlegroundevent';
import { BattleGroundEventType } from 'src/app/pages/live/model/BattleGroundEvents/battlegroundeventtype';
import { BettingBeginsEvent } from 'src/app/pages/live/model/BetEvents/bettingbeginsevent';
import { BettingEndsEvent } from 'src/app/pages/live/model/BetEvents/bettingendsevent';
import { getColor } from 'src/app/util/colorsetter';
import { GenericElementOrdering, GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { capitalize } from 'src/app/util/util';
import { EventWebSocketAPI } from 'src/app/util/websocketapi';

@Component({
  selector: 'app-live-page-status',
  templateUrl: './live-page-status.component.html',
  styleUrls: ['./live-page-status.component.scss']
})
export class LivePageStatusComponent implements OnInit, OnChanges {

  public event: BattleGroundEvent;

  public constructor(private readonly eventWebSocketAPI: EventWebSocketAPI) { }

  public ngOnInit(): void {
    this.pullCurrentData();
    this.eventWebSocketAPI.subscribe<LivePageStatusComponent>(this.parseEvents, this);
  }

  public ngOnChanges(changes: SimpleChanges): void {

  }

  public getTeamColor(team: Allegiance) {
    const color = getColor(team);
    return color;
  }

	public pullCurrentData(): any {
		const menuComponentRef: LivePageStatusComponent = this;
		$.ajax({url: getBackendUrl() + 'api/matches/currentMenuData',
			success(result: GenericResponse<GenericElementOrdering<BattleGroundEvent>[]>) {
        result.data.sort((a, b) => (a.id > b.id) ? 1 : -1);


        result.data.map((event: GenericElementOrdering<BattleGroundEvent>): void => {
          menuComponentRef.parseEvents(event.element, menuComponentRef);
        });
		}});
	}

  public parseEvents(event: BattleGroundEvent, classRef: LivePageStatusComponent): void {
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
