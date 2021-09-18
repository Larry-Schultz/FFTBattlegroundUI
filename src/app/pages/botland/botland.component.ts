import { Component, OnInit, OnChanges, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { EventWebSocketAPI } from 'src/app/util/websocketapi';
import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';

import { BotlandModalComponent } from './component/botlandmodal/botlandmodal.component';
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

  @ViewChildren(BotlandModalComponent)
  public modalComponents: QueryList<BotlandModalComponent>;

  public refresh = false;

  public dtOptions: DataTables.Settings = {
    ordering:  true,
    order: [[ 1, 'desc' ]],
    paging: false,
    columns: [
      { type: 'html' },
      { type: 'num' },
      { type: 'num' },
      { type: 'num' },
      { type: 'num' },
      { type: 'num-fmt' },
      { type: 'html' },
    ]
  };
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  public dtTrigger: Subject<any> = new Subject<any>();

  public botlandData: CleanedBotlandData;
  public botlandLeaderboard: BotlandLeaderboard;
  public modalMap: Map<string, BotlandModalComponent>;
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
      this.dtTrigger.next();

      this.playerBalanceHistoryService.find(this.botlandData.primaryBotAccountName, 'api/players/balanceHistory', 10, 1).subscribe(data => {
        const title = 'Player balance based on past participated tournaments (data where available)';
        this.chartData = this.playerBalanceHistoryService.generateMyChartData(data.data, title);
        this.readyToRenderModal = true;
      });
    });

    this.botlandLeaderboardService.find(this.refresh).subscribe((genericResponse: GenericResponse<BotlandLeaderboard>): void => {
      this.botlandLeaderboard = genericResponse.data;
    });

    this.eventWebSocketAPI.subscribe<BotlandComponent>(this.parseEvents, this);

    this.updatedBotlandComponentsMap(this.modalComponents);
    this.queryListSubscribed = true;
  }

  public ngOnChanges() {

  }

  public ngAfterViewInit() {
    this.modalComponents.changes.subscribe((queryList: QueryList<BotlandModalComponent>): void => {
      this.updatedBotlandComponentsMap(queryList);
      if (this.modalMap.size > 0) {
        this.readyToRenderModal = true;
      }
    });
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

  public showModal(botPlayerName: string): void {
    const component: BotlandModalComponent = this.modalMap.get(botPlayerName);
    component.showModal();
    component.renderChart();
  }

  public getPersonalityMessage(botName: string): string {
    let result: string = this.botlandData.lastBotPersonalityResponses.get(botName);
    if(result) {
      result = result.replace(botName + ':', '');
    }
    return result;
  }

  private reload() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.set('refresh', 'true');
    window.location.search = urlParams.toString();
  }

  protected updatedBotlandComponentsMap(queryList: QueryList<BotlandModalComponent>): void {
    if (this.modalMap == null || this.modalMap === undefined) {
      this.modalMap = new Map<string, BotlandModalComponent>();
    }

    if (queryList != null && queryList !== undefined) {
      queryList.forEach((modal: BotlandModalComponent): void => {
        if (modal.bot != null && !this.modalMap.has(modal.bot.player)) {
          this.modalMap.set(modal.bot.player, modal);
        }
      });
    }
  }

}
