import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { getColor } from 'src/app/util/colorsetter';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { UnitInfoEvent } from '../../model/TeamEvents/unitinfoevent';
import { TeamInfoEntry } from '../teaminfo/model/teaminfoentry';

@Component({
  selector: 'app-unitinfo',
  templateUrl: './unitinfo.component.html',
  styleUrls: ['./unitinfo.component.scss']
})
export class UnitInfoComponent implements OnInit, OnChanges {

  @Input()
  public loading: boolean;

  @Input()
  public teamInfo: TeamInfoEntry;

  @Input()
  public unitInfo: UnitInfoEvent;

  @Input()
  public alive: boolean;

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {

  }

  public getTeamColor(allegiance: Allegiance): string {
    const result = getColor(allegiance);
    return result;
  }

}
