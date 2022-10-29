import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LiveData } from '../../model/livedata';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

@Component({
  selector: 'app-matchblock',
  templateUrl: './matchblock.component.html',
  styleUrls: ['./matchblock.component.scss']
})
export class MatchBlockComponent implements OnInit, OnChanges {

  @Input()
  public liveData: LiveData;

  @Input()
  public searchEnabled: boolean;

  public leftSide: Allegiance = Allegiance.LEFT;
  public rightSide: Allegiance = Allegiance.RIGHT;

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {

  }

}
