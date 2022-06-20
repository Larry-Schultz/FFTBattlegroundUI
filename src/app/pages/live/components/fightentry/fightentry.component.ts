import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FightEntry } from './model/fightentry';

@Component({
  selector: 'app-fightentry',
  templateUrl: './fightentry.component.html',
  styleUrls: ['./fightentry.component.scss']
})
export class FightEntryComponent implements OnInit, OnChanges {

  @Input()
  public fightEntry: FightEntry;

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {

  }

}


