import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LiveData } from '../../model/livedata';
import { Allegiance } from 'src/app/model/playerRecord';
import { TeamInfoEvent } from '../../model/teamevents';


@Component({
  selector: 'app-matchblock',
  templateUrl: './matchblock.component.html',
  styleUrls: ['./matchblock.component.scss']
})
export class MatchBlockComponent implements OnInit, OnChanges {

  @Input()
  public liveData: LiveData;

  public leftSide: Allegiance = Allegiance.LEFT;
  public rightSide: Allegiance = Allegiance.RIGHT;

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {

  }

}