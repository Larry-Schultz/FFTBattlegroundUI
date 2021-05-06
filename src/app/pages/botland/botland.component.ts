import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

import { GenericResponse } from 'src/app/util/genericresponse';
import { EventWebSocketAPI } from 'src/app/util/websocketapi';
import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';

import { BotlandModalComponent } from './component/botlandmodal/botlandmodal.component';
import { BotlandDataService, BotlandData, CleanedBotlandData } from './service/botlanddata.service';
import { BattleGroundEvent } from '../live/model/battlegroundevent';


@Component({
  selector: 'app-botland',
  templateUrl: './botland.component.html',
  styleUrls: ['./botland.component.scss']
})
export class BotlandComponent implements OnInit, AfterViewInit {

  @ViewChildren(BotlandModalComponent)
  public modalComponents: QueryList<BotlandModalComponent>;

  public botlandData: CleanedBotlandData;
  public modalMap: Map<string, BotlandModalComponent>;
  public chartData: MyChartData;

  public readyToRenderModal = false;
  public queryListSubscribed = false;

  constructor(private botlandDataService: BotlandDataService, private playerBalanceHistoryService: PlayerBalanceHistoryService,
              private eventWebSocketAPI: EventWebSocketAPI) { }

  public ngOnInit() {
    this.botlandDataService.find().subscribe((genericResponse: GenericResponse<BotlandData>): void => {
      this.botlandData = new CleanedBotlandData(genericResponse.data);

      this.playerBalanceHistoryService.find(this.botlandData.primaryBotAccountName, 'api/players/balanceHistory', 10, 1).subscribe(data => {
        const title = 'Player balance based on past participated tournaments (data where available)';
        this.chartData = this.playerBalanceHistoryService.generateMyChartData(data.data, title);
      });
    });

    this.eventWebSocketAPI.subscribe<BotlandComponent>(this.parseEvents, this);
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
