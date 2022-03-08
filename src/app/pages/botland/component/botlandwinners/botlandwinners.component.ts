import { Component, OnInit, Input } from '@angular/core';
import { BotlandLeaderboard } from '../../model/botlandleaderboard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-botlandwinners',
  templateUrl: './botlandwinners.component.html',
  styleUrls: ['./botlandwinners.component.scss']
})
export class BotlandwinnersComponent implements OnInit {

  @Input()
  public botlandLeaderboard: BotlandLeaderboard;

  @Input()
  public botlandLeadeboardDataTrigger: Subject<any>;

  public dtOptions: DataTables.Settings = {
    ordering: false,
    order: [[ 1, 'desc' ]],
    paging: true,
    pageLength: 20,
    searching: false,
    columns: [
      { type: 'string' },
      { type: 'string' },
      { type: 'num' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
