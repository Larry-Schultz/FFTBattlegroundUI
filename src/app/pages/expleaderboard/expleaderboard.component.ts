import { Component, OnInit } from '@angular/core';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getColor } from 'src/app/util/colorsetter';
import { ExpLeaderboardService, ExpLeaderboardData, ExpLeaderboardEntry } from './service/expleaderboard.service';

@Component({
  selector: 'app-expleaderboard',
  templateUrl: './expleaderboard.component.html',
  styleUrls: ['./expleaderboard.component.scss']
})
export class ExpLeaderboardComponent implements OnInit {

  leaderboard: ExpLeaderboardEntry[];
  generationDateString: string;

  constructor(private expLeaderboardService: ExpLeaderboardService ) { }

  ngOnInit() {
    this.expLeaderboardService.find().subscribe((genericResponse: GenericResponse<ExpLeaderboardData>): void => {
      this.leaderboard = genericResponse.data.expLeaderboard.leaderboardEntries;
      this.generationDateString = genericResponse.data.generationDateString;
    });
  }

  getColorForLeaderboardEntry(entry: ExpLeaderboardEntry): string {
    const color: string = getColor(entry.team);
    return color;
  }
}
