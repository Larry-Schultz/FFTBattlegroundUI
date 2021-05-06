import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-mychartcomponent',
  templateUrl: './mychartcomponent.component.html',
  styleUrls: ['./mychartcomponent.component.scss']
})
export class MyLineChartComponent implements OnInit, OnChanges {

  @Input() chartData: MyChartData;
  @Input() width: number;
  @Input() height: number;

  @ViewChild(BaseChartDirective, {static: false})
  public chart: BaseChartDirective;

  public constructor() {
    this.chartData = null;
  }

  public ngOnInit() {
    this.update();
  }

  public ngOnChanges() {
    this.update();
  }

  public update(): void {
    if (this.chart != null && this.chart !== undefined) {
      this.chart.chart.height = this.height;
      this.chart.chart.update();
    }
  }

}

export class MyChartData {
  chartData: ChartDataSets[];
  chartLabels: Label[];
  chartColors: Color[];
  chartOptions: ChartOptions;

  chartLegend: boolean;
  chartType: string;
  chartPlugins: any[];

  constructor(chartData: ChartDataSets[], chartLabels: Label[], chartOptions: ChartOptions) {
    this.chartData = chartData;
    this.chartLabels = chartLabels;
    this.chartOptions = chartOptions;

    this.chartLegend = true;
    this.chartType = 'line';
    this.chartPlugins = [];
  }

}
