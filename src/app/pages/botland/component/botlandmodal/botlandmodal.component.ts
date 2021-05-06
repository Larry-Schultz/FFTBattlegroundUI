import { Component, OnInit, Input, TemplateRef, ViewChild, OnChanges } from '@angular/core';

import { BsModalService } from 'ngx-foundation/modal';
import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Label } from 'ng2-charts';

import { Bots, BotHourlyData, CleanedBotData } from '../../service/botlanddata.service';
import { GenericElementOrdering, convertGenericElementListToMap } from 'src/app/util/genericresponse';
import { MyChartData, MyLineChartComponent } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';

@Component({
  selector: 'app-botlandmodal',
  templateUrl: './botlandmodal.component.html',
  styleUrls: ['./botlandmodal.component.scss']
})
export class BotlandModalComponent implements OnInit, OnChanges {

  @Input() bot: Bots;
  @Input() botConfigData: CleanedBotData;
  @Input() botHourlyData: GenericElementOrdering<BotHourlyData>[];

  @ViewChild('template', {static: false}) templateRef: TemplateRef<any>;
  @ViewChild('chart', {static: false} ) chartComponent: MyLineChartComponent;

  modalRef: BsModalRef;
  myChartData: MyChartData = null;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {

  }

  ngOnChanges() {
  }

  public renderModal(): boolean {
    const botPresent = this.bot != null && this.bot !== undefined;
    const botConfigDataPresent = this.botConfigData != null && this.botConfigData !== undefined;
    const botHourlyDataPresent = this.botHourlyData != null && this.botHourlyData !== undefined && this.botHourlyData.length > 0;

    const result = botPresent && botConfigDataPresent && botHourlyDataPresent;
    return result;
  }

  public showModal(): void {
    this.modalRef = this.modalService.show(this.templateRef, {class: 'small'});
  }

  public renderChart(): void {
    this.myChartData = this.populateBotChart(this.botHourlyData);
    this.chartComponent.update();
  }

  public hideModal(): void {
    this.modalRef.hide();
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
      label: this.bot.player,
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
