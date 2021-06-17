import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { PlayerData } from '../../service/playerdata.service';
import { getColor } from 'src/app/util/colorsetter';
import { Allegiance, PlayerSkill } from 'src/app/model/playerRecord';

@Component({
  selector: 'app-playerdata',
  templateUrl: './playerdata.component.html',
  styleUrls: ['./playerdata.component.scss']
})
export class PlayerDataComponent implements OnInit, OnChanges {

  @Input()
  public playerData: PlayerData;

  @Input()
  public prestigeLevel: number;

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges() {

  }

  public allegianceColor(allegiance: Allegiance): string {
    const color = getColor(allegiance);
    return color;
  }

}
