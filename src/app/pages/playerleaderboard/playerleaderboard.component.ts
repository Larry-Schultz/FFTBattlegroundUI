import { Component, OnInit, AfterViewInit } from '@angular/core';

import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';
import { GenericResponse } from 'src/app/util/genericresponse';
import { getColor } from 'src/app/util/colorsetter';
import { MyChartData } from "src/app/fragments/mychartcomponent/model/MyChartData";
import { BalanceHistoryData } from "src/app/model/BalanceHistory/BalanceHistoryData";

import { PlayerLeaderboardDataService } from './service/playerleaderboarddata.service';
import { PlayerLeaderboardData } from "./model/PlayerLeaderboardData";
import { PlayerLeaderboard } from "./model/PlayerLeaderboard";
import { PlayerLeaderboardEntry } from "./model/PlayerLeaderboardEntry";

@Component({
  selector: 'app-playerleaderboard',
  templateUrl: './playerleaderboard.component.html',
  styleUrls: ['./playerleaderboard.component.scss']
})
export class PlayerLeaderboardComponent implements OnInit, AfterViewInit {
  protected chartResultsCount = 10;


  public leaderboard: PlayerLeaderboard;
  public topPlayerCommaDelimitedString: string;
  public generationDateString: string;

  public chartData: MyChartData;

  constructor(private playerLeaderboardDataService: PlayerLeaderboardDataService,
              private playerBalanceHistoryService: PlayerBalanceHistoryService) { }

  ngOnInit() {
    const componentRef = this;
    this.playerLeaderboardDataService.find().subscribe((genericResponse: GenericResponse<PlayerLeaderboardData>): void => {
      componentRef.leaderboard = genericResponse.data.playerLeaderboard;
      componentRef.topPlayerCommaDelimitedString = genericResponse.data.topPlayerCommaSplitString;
      componentRef.generationDateString = genericResponse.data.generationDateString;

      componentRef.playerBalanceHistoryService.findPlayerLeaderboardData()
        .subscribe((data: GenericResponse<BalanceHistoryData>) => {
          const title = 'Top Player balance based on past participated tournaments (data where available)';
          componentRef.chartData = this.playerBalanceHistoryService.generateMyChartData(data.data, title);
      });
    });


  }

  ngAfterViewInit() {

  }

    getColorForLeaderboardEntry(entry: PlayerLeaderboardEntry): string {
      const color: string = getColor(entry.allegiance);
      return color;
  }

}
