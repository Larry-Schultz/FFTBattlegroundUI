import { Component, OnInit, Input, OnChanges, TrackByFunction } from '@angular/core';

import { Allegiance } from 'src/app/model/playerRecord';
import { getColor } from 'src/app/util/colorsetter';
import { GridMode } from '../grids/grids.component';
import { BetEntry } from '../betentry/model/betentry';

@Component({
  selector: 'app-bet-grid',
  templateUrl: './betgrid.component.html',
  styleUrls: ['./betgrid.component.scss']
})
export class BetGridComponent implements OnInit, OnChanges {

  @Input()
  public allegiance: Allegiance;

  @Input()
  public betEntries: BetEntry[];

  @Input()
  public otherTeamBetEntries: BetEntry[];

  @Input()
  public mode: GridMode;

  public betEntryTrackByFunction: TrackByFunction<BetEntry> = BetEntry.trackByBetAmount;
  public betEntrySortFunction = BetEntry.compare;


  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {

  }

  public getGridColor(): string {
    const result = this.allegiance ? getColor(this.allegiance) : 'green';
    return result;
  }

  public generateEmptyArray(size: number) {
    const emptyArray = new Array<number>(size);
    emptyArray.fill(0);
    return emptyArray;
  }

  public getDifferenceInSizeBetweenBetEntries(): number {
    const result = this.otherTeamBetEntries.length - this.betEntries.length;
    return result;
  }

}
