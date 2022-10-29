import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BotLeaderboard } from '../../model/BotLeaderboard';

@Component({
  selector: 'app-bot-leaderboard-table',
  templateUrl: './bot-leaderboard-table.component.html',
  styleUrls: ['./bot-leaderboard-table.component.scss']
})
export class BotLeaderboardTableComponent implements OnInit, OnChanges {

  @Input()
  public leaderboard: BotLeaderboard[]

  public constructor() { }

  public ngOnInit(): void {

  }

  public ngOnChanges(): void {

  }

}
