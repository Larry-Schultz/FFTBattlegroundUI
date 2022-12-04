import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';
import { MyChartData } from './model/MyChartData';

@Component({
  selector: 'app-mychartcomponent',
  templateUrl: './mychartcomponent.component.html',
  styleUrls: ['./mychartcomponent.component.scss']
})
export class MyLineChartComponent implements OnInit, OnChanges {

  @Input()
  public chartData: MyChartData;

  @Input()
  public width: number;

  @Input()
  public height: number;

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


