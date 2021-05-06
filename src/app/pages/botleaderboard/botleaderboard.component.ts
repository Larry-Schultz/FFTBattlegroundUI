import { Component, OnInit } from '@angular/core';

import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';
import { BotLeaderboardDataService, BotLeaderboard, BotLeaderboardData } from './service/botleaderboarddata.service';
import { GenericResponse } from 'src/app/util/genericresponse';
import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { BalanceHistoryData } from 'src/app/model/balancehistory';

@Component({
  selector: 'app-botleaderboard',
  templateUrl: './botleaderboard.component.html',
  styleUrls: ['./botleaderboard.component.scss']
})
export class BotLeaderboardComponent implements OnInit {

  leaderboard: BotLeaderboard[];
  generationDateString: string;

  chartData: MyChartData = null;

  constructor(private botLeaderboardDataService: BotLeaderboardDataService,
              private playerBalanceHistoryService: PlayerBalanceHistoryService) { }

  ngOnInit() {
    this.botLeaderboardDataService.find().subscribe((genericResponse: GenericResponse<BotLeaderboardData>): void => {
      this.leaderboard = genericResponse.data.botLeaderboard;
      this.generationDateString = genericResponse.data.generationDateString;
    });

    this.playerBalanceHistoryService.findBotLeaderboardData().subscribe((genericResponse: GenericResponse<BalanceHistoryData>): void => {
      this.chartData = this.playerBalanceHistoryService.generateBotChartData(genericResponse.data);
    });
  }

}
