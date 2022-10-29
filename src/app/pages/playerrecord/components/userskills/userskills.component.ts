import { Component, OnInit, Input } from '@angular/core';

import { PlayerSkill } from "src/app/model/PlayerRecord/PlayerSkill";
import { getColorForSkill } from '../../util/skillsUtils';

@Component({
  selector: 'app-userskills',
  templateUrl: './userskills.component.html',
  styleUrls: ['./userskills.component.scss']
})
export class UserSkillsComponent implements OnInit {

  @Input()
  public userSkills: PlayerSkill[];

  public constructor() { }

  public ngOnInit(): void {
  }

  public getColorForSkill(playerSkill: PlayerSkill): string {
    const color = getColorForSkill(playerSkill);
    return color;
  }

}
