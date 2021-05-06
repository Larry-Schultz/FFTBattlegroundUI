import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { TodaysCount } from '../../service/globalgilcountdata.service';
import { GlobalGilCountChartService, GilDateGraphEntry } from 'src/app/pages/globalgilcount/service/globalgilcountchart.service';
import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { GenericResponse } from 'src/app/util/genericresponse';

@Component({
  selector: 'app-globalgilcounttab',
  templateUrl: './globalgilcounttab.component.html',
  styleUrls: ['./globalgilcounttab.component.scss']
})
export class GlobalGilCountTabComponent implements OnInit, AfterViewInit {

  @Input() globalGilCountData: TodaysCount[];
  @Input() timeUnit: string;
  chartData: MyChartData;

  constructor(private globalGilCountChartService: GlobalGilCountChartService) { }

  ngOnInit() {
    this.globalGilCountChartService.findGlobalGilChartData(this.timeUnit)
      .subscribe((genericResponse: GenericResponse<GilDateGraphEntry[]>): void => {
        const title = 'Global Gil Count Based on historical data (where available)';
        this.chartData = this.globalGilCountChartService.populateChart(genericResponse.data, this.timeUnit, title);
    });
  }

  ngAfterViewInit() {

  }

}
