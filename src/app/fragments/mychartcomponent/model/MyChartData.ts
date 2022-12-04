import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


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
