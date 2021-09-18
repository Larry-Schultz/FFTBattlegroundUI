import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BotResponseData } from './model/botresponsedata';
import { BotDataService } from './service/botdata.service';
import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { GenericElementOrdering, convertGenericElementListToMap } from 'src/app/util/genericresponse';
import { BotHourlyData } from '../botland/model/bothourlydata';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { EventWebSocketAPI } from 'src/app/util/websocketapi';
import { BattleGroundEvent } from '../live/model/battlegroundevent';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {

  public botName = null;
  public refresh = false;
  public bot: BotResponseData;
  public myChartData: MyChartData = null;

  constructor(private botDataService: BotDataService, private activatedRoute: ActivatedRoute,
              private eventWebSocketAPI: EventWebSocketAPI) {
      this.activatedRoute.params.subscribe(params => {
      this.botName = params.botName;
      if (params.refresh) {
        this.refresh = params.refresh;
      }
    });

    

  }

  public ngOnInit(): void {
    this.eventWebSocketAPI.subscribe<BotComponent>(this.parseEvents, this);

    this.botDataService.find(this.botName, this.refresh).subscribe(botResponseData => {
      this.bot = botResponseData.data;
      this.myChartData = this.populateBotChart(this.bot.botHourlyDataMap);
    });
  }

  public parseEvents(event: BattleGroundEvent, classRef: BotComponent): void {
    switch (event.eventType) {
      case 'BETTING_BEGINS':
        classRef.reload();
        break;
      default:
        break;
    }

  }

  public reload(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.set('refresh', 'true');
    window.location.search = urlParams.toString();
  }

  populateBotChart(botHourlyData: GenericElementOrdering<BotHourlyData>[]): MyChartData {
    let chartData: MyChartData = null;
    const coreLabels: Label[] = [];
    const datasets: ChartDataSets[] = [];
    let chartOptions: ChartOptions;
    const chartPlugins = [];

    const data: number[] = [];
    const botHourlyDataMap = convertGenericElementListToMap(botHourlyData);
    for (let i = 0; i <= 23; i++) {
      const hourlyDataEntryElement = botHourlyDataMap.get(i);
      const balanceData = hourlyDataEntryElement.balance;
      if (typeof balanceData !== 'undefined') {
        data.push(balanceData);
        coreLabels.push(hourlyDataEntryElement.hourString);
      }
    }

    datasets.push({
      data,
      label: this.bot.botName,
      fill: false
      });

    chartOptions = {
            responsive: true,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Bot balance based on past 24 hours',
            }
        };

    chartData = new MyChartData(datasets, coreLabels, chartOptions);

    return chartData;
  }

}
