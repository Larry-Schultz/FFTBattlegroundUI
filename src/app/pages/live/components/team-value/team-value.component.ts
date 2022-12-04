import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

import { Allegiance } from 'src/app/model/PlayerRecord/Allegiance';
import { LiveData } from '../../model/livedata';

@Component({
  selector: 'app-team-value',
  templateUrl: './team-value.component.html',
  styleUrls: ['./team-value.component.scss']
})
export class TeamValueComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  public team: Allegiance;

  @Input()
  public teamValue = 0;

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {

  }

  public ngAfterViewInit(): void {

  }


  public teamValueTitle() {
    const title = this.team != Allegiance.CHAMPION ? "Team Value" : "Champions don't buy in, so they have no value";
    return title;
  }

}
