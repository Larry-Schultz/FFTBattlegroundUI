import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatchInfoEvent } from '../../model/matchevents';

@Component({
  selector: 'app-map-number',
  templateUrl: './mapnumber.component.html',
  styleUrls: ['./mapnumber.component.scss']
})
export class MapNumberComponent implements OnInit, OnChanges {

  @Input()
  public matchInfoEvent: MatchInfoEvent;

  public mapName: string;
  public mapNumber: number

  public constructor() { }

  public ngOnInit() {
    this.mapName = '';
    this.mapNumber = 0;
  }

  public ngOnChanges() {
    if (this.matchInfoEvent) {
      this.mapName = this.matchInfoEvent.mapName;
      this.mapNumber = this.matchInfoEvent.mapNumber;
    }
  }

}
