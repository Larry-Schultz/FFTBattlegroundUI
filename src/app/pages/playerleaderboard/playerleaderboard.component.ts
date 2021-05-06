import { Component, OnInit, AfterViewInit } from '@angular/core';

import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';
import { GenericResponse } from 'src/app/util/genericresponse';
import { getColor } from 'src/app/util/colorsetter';
import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { BalanceHistoryData } from 'src/app/model/balancehistory';

import {
  PlayerLeaderboardDataService,
  PlayerLeaderboardData,
  PlayerLeaderboard,
  PlayerLeaderboardEntry } from './service/playerleaderboarddata.service';

@Component({
  selector: 'app-playerleaderboard',
  templateUrl: './playerleaderboard.component.html',
  styleUrls: ['./playerleaderboard.component.scss']
})
export class PlayerLeaderboardComponent implements OnInit, AfterViewInit {
  protected chartResultsCount = 10;


  leaderboard: PlayerLeaderboard;
  topPlayerCommaDelimitedString: string;
  generationDateString: string;

  chartData: MyChartData;

  constructor(private playerLeaderboardDataService: PlayerLeaderboardDataService,
              private playerBalanceHistoryService: PlayerBalanceHistoryService) { }

  ngOnInit() {
    const componentRef = this;
    this.playerLeaderboardDataService.find().subscribe((genericResponse: GenericResponse<PlayerLeaderboardData>): void => {
      componentRef.leaderboard = genericResponse.data.playerLeaderboard;
      componentRef.topPlayerCommaDelimitedString = genericResponse.data.topPlayerCommaSplitString;
      componentRef.generationDateString = genericResponse.data.generationDateString;

      componentRef.playerBalanceHistoryService.find(componentRef.topPlayerCommaDelimitedString,
        'api/players/playerLeaderboardBalanceHistory', componentRef.chartResultsCount, componentRef.leaderboard.highestPlayers.length)
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
