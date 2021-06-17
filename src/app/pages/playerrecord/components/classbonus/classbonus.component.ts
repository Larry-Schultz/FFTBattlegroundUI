import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { PlayerSkill, SkillCategory } from 'src/app/model/playerRecord';
import { getColorForSkill, getSkillBonusDescriptionFromExistingSkills, getPlayerSkillBySkillName } from '../../util/skillsUtils';

@Component({
  selector: 'app-classbonus',
  templateUrl: './classbonus.component.html',
  styleUrls: ['./classbonus.component.scss']
})
export class ClassBonusComponent implements OnInit, OnChanges {

  @Input()
  public classBonuses: string[];

  @Input()
  public skillBonuses: string[];

  @Input()
  public userSkills: PlayerSkill[]

  public constructor() { }

  public ngOnInit(): void {

  }

  public ngOnChanges(): void {

  }

  public getClassBonuses(): string[] {
    const sortedClassBonuses = this.classBonuses.sort(this.sortBonuses);
    return sortedClassBonuses;
  }

  public getSkillBonuses(): string[] {
    const sortedSkillBonuses = this.skillBonuses.sort(this.sortBonuses)
    return sortedSkillBonuses;
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

  public isSkillBonusAlsoClassBonus(skillName: string): boolean {
    const playerSkill: PlayerSkill = getPlayerSkillBySkillName(this.userSkills, skillName);

    let skillCategory = null;
    if (playerSkill && playerSkill.skillCategory != null) {
      skillCategory = playerSkill.skillCategory;
    }

    const result = skillCategory && (skillCategory === SkillCategory.MONSTER || skillCategory === SkillCategory.STRONG_MONSTER
      || skillCategory === SkillCategory.ELITE_MONSTER);

    return result;
  }

  protected sortBonuses(bonus1: string, bonus2: string): number {
    let sortResult = 0;
    if (bonus1 < bonus2) {
      sortResult = -1;
    } else if (bonus1 > bonus2) {
      sortResult = 1;
    }
    return sortResult;
  }

}
