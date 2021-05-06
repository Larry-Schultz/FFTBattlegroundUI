import { Component, OnInit, Input } from '@angular/core';
import { FightEntry } from '../fightentry/fightentry.component';

@Component({
  selector: 'app-fight-grid',
  templateUrl: './fightgrid.component.html',
  styleUrls: ['./fightgrid.component.scss']
})
export class FightGridComponent implements OnInit {

  @Input()
  public fightEntries: FightEntry[]

  constructor() { }

  ngOnInit() {
  }

}
