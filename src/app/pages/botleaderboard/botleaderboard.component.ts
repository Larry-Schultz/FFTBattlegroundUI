import { Component, OnInit } from '@angular/core';

import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';
import { BotLeaderboardDataService } from './service/botleaderboarddata.service';
import { BotLeaderboard } from "./model/BotLeaderboard";
import { BotLeaderboardData } from "./model/BotLeaderboardData";
import { GenericResponse } from 'src/app/util/genericresponse';
import { MyChartData } from "src/app/fragments/mychartcomponent/model/MyChartData";
import { BalanceHistoryData } from "src/app/model/BalanceHistory/BalanceHistoryData";

@Component({
  selector: 'app-botleaderboard',
  templateUrl: './botleaderboard.component.html',
  styleUrls: ['./botleaderboard.component.scss']
})
export class BotLeaderboardComponent implements OnInit {

  public leaderboard: BotLeaderboard[];
  public inactiveBots: BotLeaderboard[];
  generationDateString: string;

  chartData: MyChartData = null;

  constructor(private botLeaderboardDataService: BotLeaderboardDataService,
              private playerBalanceHistoryService: PlayerBalanceHistoryService) { }

  ngOnInit() {
    this.botLeaderboardDataService.find().subscribe((genericResponse: GenericResponse<BotLeaderboardData>): void => {
      this.leaderboard = genericResponse.data.botLeaderboard;
      this.inactiveBots = genericResponse.data.inactiveBots;
      this.generationDateString = genericResponse.data.generationDateString;
    });

    this.playerBalanceHistoryService.findBotLeaderboardData().subscribe((genericResponse: GenericResponse<BalanceHistoryData>): void => {
      this.chartData = this.playerBalanceHistoryService.generateBotChartData(genericResponse.data);
    });
  }

}
