import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { UnitInfoEvent } from '../../model/teamevents';
import { TeamInfoEntry } from '../teaminfo/teaminfo.component';
import { getColor } from 'src/app/util/colorsetter';
import { Allegiance } from 'src/app/model/playerRecord';

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
