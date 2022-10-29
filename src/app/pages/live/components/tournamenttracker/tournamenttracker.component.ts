import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { getColor } from 'src/app/util/colorsetter';
import { TournamentTracker, trackerAllegiances } from './model/tournamenttracker';

@Component({
  selector: 'app-tournamenttracker',
  templateUrl: './tournamenttracker.component.html',
  styleUrls: ['./tournamenttracker.component.scss']
})
export class TournamentTrackerComponent implements OnInit, OnChanges {

  @Input()
  public loading: boolean;

  @Input()
  public tournamentData: TournamentTracker;

  public allegiances: Allegiance[] = trackerAllegiances;

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {
    if (this.tournamentData != null) {
      console.log("received an update for tournamentDate");
    }
  }

  public allegianceColor(allegiance: Allegiance): string {
    const color = getColor(allegiance);
    return color;
  }

  //only sets a border for the champion
  public rowBorderColor(allegiance: Allegiance): string {
    if (allegiance === Allegiance.CHAMPION) {
      return 'border:1px solid ' + getColor(allegiance);
    } else {
      return null;
    }
  }

  public getClassForPanel(index: number): string {
    if (index % 2 === 0) {
      return 'firstBackgroundAndText';
    } else {
      return 'secondBackgroundAndText';
    }
  }

}




