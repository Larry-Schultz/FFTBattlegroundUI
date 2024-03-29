import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { PlayerData } from "../../model/PlayerData";
import { getColor } from 'src/app/util/colorsetter';
import { PlayerSkill } from "src/app/model/PlayerRecord/PlayerSkill";
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

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
