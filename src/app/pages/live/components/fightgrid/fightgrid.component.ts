import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FightEntry } from '../fightentry/fightentry.component';

@Component({
  selector: 'app-fight-grid',
  templateUrl: './fightgrid.component.html',
  styleUrls: ['./fightgrid.component.scss']
})
export class FightGridComponent implements OnInit , OnChanges {

  @Input()
  public fightEntries: FightEntry[]

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {

  }

}
