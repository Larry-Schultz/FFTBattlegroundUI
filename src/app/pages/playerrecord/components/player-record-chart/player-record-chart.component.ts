import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MyChartData } from 'src/app/fragments/mychartcomponent/model/MyChartData';
import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';

@Component({
  selector: 'app-player-record-chart',
  templateUrl: './player-record-chart.component.html',
  styleUrls: ['./player-record-chart.component.scss']
})
export class PlayerRecordChartComponent implements OnInit {

  @ViewChild('lineChart', {static: false})
  public lineChartElement: ElementRef;

  @Input()
  public playerName: string;

  public chartData: MyChartData = null;

  public constructor(private readonly playerBalanceHistoryService: PlayerBalanceHistoryService) { }

  public ngOnInit(): void {
    this.playerBalanceHistoryService.find(this.playerName, 'api/players/balanceHistory', 10, 1).subscribe(data => {
      const title = 'Player balance based on past participated tournaments (data where available)';
      this.chartData = this.playerBalanceHistoryService.generateMyChartData(data.data, title);
    });
  }

}
