import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faStar, faCrown, faTimes} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { getColor } from 'src/app/util/colorsetter';
import { Allegiance } from 'src/app/model/playerRecord';
import { TournamentWinData } from '../../model/tournamentwindata';

@Component({
  selector: 'app-tournamenttrackerstars',
  templateUrl: './tournamenttrackerstars.component.html',
  styleUrls: ['./tournamenttrackerstars.component.scss']
})
export class TournamentTrackerStarsComponent implements OnInit, OnChanges {

  @Input()
  public tournamentWinData: TournamentWinData

  @Input()
  public team: Allegiance;

  public star = faStar;
  public circleX = faTimesCircle ;
  public crown = faCrown;
  public times = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }

  public getStarColor(allegiance: Allegiance) {
    return getColor(allegiance);
  }

  public isChampion(allegiance: Allegiance): boolean {
    return allegiance === Allegiance.CHAMPION;
  }

}
