import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BetType } from '../../model/BattleGroundEvents/bettype';
import { BetEntry } from './model/betentry';


@Component({
  selector: 'app-betentry',
  templateUrl: './betentry.component.html',
  styleUrls: ['./betentry.component.scss']
})
export class BetentryComponent implements OnInit, OnChanges {

  @Input()
  public betEntry: BetEntry;

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {}

  public isSpecial(): boolean {
    return this.betEntry && this.betEntry.betType !== BetType.VALUE;
  }
}
