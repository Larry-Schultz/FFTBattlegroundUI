import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatchInfoEvent } from '../../model/MatchEvents/matchinfoevent';

@Component({
  selector: 'app-map-image',
  templateUrl: './mapimage.component.html',
  styleUrls: ['./mapimage.component.scss']
})
export class MapImageComponent implements OnInit, OnChanges {

  @Input()
  public matchInfoEvent: MatchInfoEvent;

  public mapUrl: string;
  public mapIconSrc: string

  public constructor() { }

  public ngOnInit() {
    this.mapUrl = null;
    this.mapIconSrc = null;
  }

  public ngOnChanges() {
    if (this.matchInfoEvent) {
      this.mapUrl = this.getMapUrl();
      this.mapIconSrc = this.getMapIconSrc();
    }
  }

  public getMapUrl(): string {
    const result = 'https://ffhacktics.com/maps.php?id=' + this.matchInfoEvent.mapNumber;
    return result;
  }

  public getMapIconSrc(): string {
     const result = 'assets/maps/' + this.matchInfoEvent.mapNumber + '.PNG';
     return result;
  }

}
