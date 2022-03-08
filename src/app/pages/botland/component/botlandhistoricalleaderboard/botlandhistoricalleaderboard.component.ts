import { Component, OnInit, Input } from '@angular/core';
import { BotlandLeaderboard } from '../../model/botlandleaderboard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-botlandhistoricalleaderboard',
  templateUrl: './botlandhistoricalleaderboard.component.html',
  styleUrls: ['./botlandhistoricalleaderboard.component.scss']
})
export class BotlandHistoricalLeaderboardComponent implements OnInit {

  @Input()
  public botlandLeaderboard: BotlandLeaderboard;

  @Input()
  public botlandLeadeboardDataTrigger: Subject<any>;

  public dtOptions: DataTables.Settings = {
    ordering:  false,
    order: [[ 1, 'desc' ]],
    paging: false,
    searching: false,
    columns: [
      { type: 'string' },
      { type: 'num' },
      { type: 'num' },
      { type: 'string' },
      { type: 'string' },
      { type: 'num' },
      { type: 'num' },
      { type: 'string' },
      { type: 'num' },
      { type: 'num' },
      { type: 'num' },
    ]
  };

  public constructor() { }

  public ngOnInit(): void {
  }

  public calculateVictoryRate(endOfDayVictories: number, ageInDays: number): number {
    return (endOfDayVictories + 1) / (ageInDays + 1);
  }

}
