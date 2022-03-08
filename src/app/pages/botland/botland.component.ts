import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { EventWebSocketAPI } from 'src/app/util/websocketapi';
import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';

import { BotlandDataService, CleanedBotlandData } from './service/botlanddata.service';
import { BattleGroundEvent } from '../live/model/battlegroundevent';
import { BotlandData } from './model/botlanddata';
import { BotlandleaderboardService } from './service/botlandleaderboard.service';
import { BotlandLeaderboard } from './model/botlandleaderboard';


@Component({
  selector: 'app-botland',
  templateUrl: './botland.component.html',
  styleUrls: ['./botland.component.scss']
})
export class BotlandComponent implements OnInit, OnChanges, AfterViewInit {


  public botlandDataTrigger: Subject<any> = new Subject<any>();
  public botlandLeadeboardDataTrigger: Subject<any> = new Subject<any>();

  public refresh = false;

  public botlandData: CleanedBotlandData;
  public botlandLeaderboard: BotlandLeaderboard;
  public chartData: MyChartData;

  public readyToRenderModal = false;
  public queryListSubscribed = false;

  constructor(private botlandDataService: BotlandDataService, private playerBalanceHistoryService: PlayerBalanceHistoryService,
              private eventWebSocketAPI: EventWebSocketAPI, private activatedRoute: ActivatedRoute,
              private botlandLeaderboardService: BotlandleaderboardService) { 
      this.activatedRoute.params.subscribe(params => {
      if (params.refresh) {
        this.refresh = params.refresh;
      }
    });
    }

  public ngOnInit() {
    this.botlandDataService.find(this.refresh).subscribe((genericResponse: GenericResponse<BotlandData>): void => {
      this.botlandData = new CleanedBotlandData(genericResponse.data);
      this.botlandDataTrigger.next();

      this.playerBalanceHistoryService.find(this.botlandData.primaryBotAccountName, 'api/players/balanceHistory', 10, 1).subscribe(data => {
        const title = 'Player balance based on past participated tournaments (data where available)';
        this.chartData = this.playerBalanceHistoryService.generateMyChartData(data.data, title);
        this.readyToRenderModal = true;
      });
    });

    this.botlandLeaderboardService.find(this.refresh).subscribe((genericResponse: GenericResponse<BotlandLeaderboard>): void => {
      this.botlandLeaderboard = genericResponse.data;
      this.botlandLeadeboardDataTrigger.next();
    });

    this.eventWebSocketAPI.subscribe<BotlandComponent>(this.parseEvents, this);

    this.queryListSubscribed = true;
  }

  public ngOnChanges() {

  }

  public ngAfterViewInit() {
    this.queryListSubscribed = true;

  }

  public parseEvents(event: BattleGroundEvent, classRef: BotlandComponent): void {
    switch (event.eventType) {
      case 'BETTING_BEGINS':
        classRef.reload();
        break;
      default:
        break;
    }

  }

  private reload() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.set('refresh', 'true');
    window.location.search = urlParams.toString();
  }

}
