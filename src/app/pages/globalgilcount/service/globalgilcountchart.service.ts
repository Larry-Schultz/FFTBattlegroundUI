import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Label } from 'ng2-charts';

import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Injectable({
  providedIn: 'root'
})
export class GlobalGilCountChartService {

  constructor(private http: HttpClient) { }

  findGlobalGilChartData(unit: string): Observable<GenericResponse<GilDateGraphEntry[]>> {
    const url = getBackendUrl() + 'api/players/globalGilHistoryGraphData?timeUnit=' + unit;
    const response: Observable<GenericResponse<GilDateGraphEntry[]>> = this.http.get<GenericResponse<GilDateGraphEntry[]>>(url);
    return response;
  }

  populateChart(gilDateGraphEntry: GilDateGraphEntry[], unit: string, chartTitle: string): MyChartData {
    let chartData: MyChartData;
    let coreLabels: Label[];
    const datasets: ChartDataSets[] = [];
    let chartOptions: ChartOptions;
    const chartPlugins = [];
    if (gilDateGraphEntry.length > 0) {
				const playerName = unit;
				const labels = [];
				const dataArray = [];
				for (let j = 0; j < gilDateGraphEntry.length; j++) {
					const date = new Date(gilDateGraphEntry[j].date);
					const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
					const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
					const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
					const dateString: string = day.toString() + '-' + month.toString() + '-' + year.toString();
					labels.push(dateString);
					dataArray.push(gilDateGraphEntry[j].globalGilCount);
				}
				coreLabels = labels;
				datasets.push({
					data: dataArray,
					label: playerName,
					fill: false
					});
			}

    chartOptions = {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: true,
                    text: chartTitle,
                }
            };

    chartData = new MyChartData(datasets, coreLabels, chartOptions);

    return chartData;
  }
}

export interface GilDateGraphEntry {
    globalGilCount: number;
    date: number;
}
