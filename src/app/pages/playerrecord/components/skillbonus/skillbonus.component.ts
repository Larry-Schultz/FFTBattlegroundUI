import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { getColorForSkill, getSkillBonusDescriptionFromExistingSkills, getPlayerSkillBySkillName } from '../../util/skillsUtils';
import { PlayerSkill } from "src/app/model/PlayerRecord/PlayerSkill";

@Component({
  selector: 'app-skillbonus',
  templateUrl: './skillbonus.component.html',
  styleUrls: ['./skillbonus.component.scss']
})
export class SkillBonusComponent implements OnInit, OnChanges {

  @Input()
  public skillBonuses: string[];

  @Input()
  public userSkills: PlayerSkill[];

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {

  }

  public getSkillBonusDescriptionFromExistingSkills(skillName: string): string {
    const skillDescription: string = getSkillBonusDescriptionFromExistingSkills(this.userSkills, skillName);
    return skillDescription;
  }

  public getColorForSkillByName(skillBonus: string): string {
    const playerSkill: PlayerSkill = getPlayerSkillBySkillName(this.userSkills, skillBonus);
    const color: string = getColorForSkill(playerSkill);
    return color;
  }

}
