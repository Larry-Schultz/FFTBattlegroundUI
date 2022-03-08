import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BotlandLeaderboardEntry } from 'src/app/pages/botland/model/botlandleaderboardentry';

@Component({
  selector: 'app-singlebotleaderboarddata',
  templateUrl: './singlebotleaderboarddata.component.html',
  styleUrls: ['./singlebotleaderboarddata.component.scss']
})
export class SingleBotLeaderboardDataComponent implements OnInit, OnChanges {

  @Input()
  public botLeaderboardData: BotlandLeaderboardEntry;

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {

  }

  public calculateTotalWinRate(): number {
    const wins = this.botLeaderboardData.totalBetWins;
    const losses = this.botLeaderboardData.totalBetLosses;
    const totalWins = (wins + 1) / (wins + losses + 1);
    return totalWins;
  }

}
