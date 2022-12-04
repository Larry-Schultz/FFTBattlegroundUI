import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ChartData, ChartDataSets, ChartOptions, ChartTooltipItem} from 'chart.js';
import { Label } from 'ng2-charts';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';

// import a particular color scheme
import { Paired12 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer';

import { BalanceHistoryData } from "src/app/model/BalanceHistory/BalanceHistoryData";
import { MyChartData } from "src/app/fragments/mychartcomponent/model/MyChartData";
import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';


@Injectable({
  providedIn: 'root'
})
export class PlayerBalanceHistoryService {

  constructor(private http: HttpClient) {

  }

  find(playerName: string, baseUrl: string, count: number, playerCount: number): Observable<GenericResponse<BalanceHistoryData>> {
    const url = this.generateServiceUrl(playerName, baseUrl, count, playerCount);
    const response: Observable<GenericResponse<BalanceHistoryData>> = this.http.get<GenericResponse<BalanceHistoryData>>(url);
    return response;
  }

  findBotLeaderboardData(): Observable<GenericResponse<BalanceHistoryData>> {
    const url = getBackendUrl() + 'api/players/botLeaderboardBalanceHistory?count=10&bots=10';
    const response: Observable<GenericResponse<BalanceHistoryData>> = this.http.get<GenericResponse<BalanceHistoryData>>(url);
    return response;
  }

  generateServiceUrl(commaDelimitedPlayerNames: string, baseUrl: string, count: number, playerCount: number) {
    const playerArgument = playerCount > 1 ? 'players' : 'player';

    const result = getBackendUrl() + baseUrl + '?' + playerArgument + '=' + commaDelimitedPlayerNames + '&count=' + count.toString();
    return result;
  }

  generateBotChartData(balanceHistoryData: BalanceHistoryData): MyChartData {
    const title = 'Balance based on past participated tournaments (for active bots only)';
    const count = balanceHistoryData.standardSize;
    const result: MyChartData = this._generateChartData(balanceHistoryData, count, title);
    return result;
  }

  generateMyChartData(balanceHistoryData: BalanceHistoryData, chartTitle: string): MyChartData {
    let count = balanceHistoryData.standardSize;
    if(!count || count == 0) {
      count = 10;
    }
    const result: MyChartData = this._generateChartData(balanceHistoryData, count, chartTitle);
    return result;
  }

  protected _generateChartData(balanceHistoryData: BalanceHistoryData, count: number, chartTitle: string): MyChartData {
    let chartData: MyChartData;
    let coreLabels: Label[];
    const datasets: ChartDataSets[] = [];
    let chartOptions: ChartOptions;
    const chartPlugins = [];
    for (const element of balanceHistoryData.leaderboardBalanceHistories) {
        if (element.balanceHistory.length >= count) {
          let balanceHistory = element.balanceHistory
          if(element.balanceHistory.length > count) {
            balanceHistory = balanceHistory.splice(0, count);
          }
          const playerName = element.playerName;
          const labels = [];
          const dataArray = [];
          for (const currentBalanceHistory of balanceHistory) {
            const date = new Date(currentBalanceHistory.create_timestamp);
            const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
            const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
            const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
            const dateString: string = day.toString() + '-' + month.toString() + '-' + year.toString();
            labels.push(dateString);
            dataArray.push(currentBalanceHistory.balance);
          }
          coreLabels = labels;
          datasets.push({
            data: dataArray,
            label: playerName,
            fill: false
            });
        }
      }

    chartOptions = {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: true,
                    text: chartTitle,
                },
                tooltips: {
                  callbacks: {
                    label: (tooltipItem: ChartTooltipItem, data: ChartData) => {
                      let value: any = data.datasets[0].data[tooltipItem.index];
                      value = value.toString();
                      value = value.split(/(?=(?:...)*$)/);
                      value = value.join(',');
                      return value;
                    }
                  } // end callbacks:
                }, //end tooltips
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero:true,
                      callback: (value: number, index: number, values: number[]) => {
                        // Convert the number to a string and splite the string every 3 charaters from the end
                        return value.toLocaleString();
                      }
                    }
                  }],
                  xAxes: [{
                    ticks: {}
                  }]
                }

            };

    chartData = new MyChartData(datasets, coreLabels, chartOptions);

    return chartData;
  }

}
