import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { PlayerSkill } from "src/app/model/PlayerRecord/PlayerSkill";
import { SkillType } from "src/app/model/PlayerRecord/SkillType";
import { SkillCategory } from "src/app/model/PlayerRecord/SkillCategory";
import { getColorForSkill, sortSkillsByName } from '../../util/skillsUtils';

@Component({
  selector: 'app-skillcooldown',
  templateUrl: './skillcooldown.component.html',
  styleUrls: ['./skillcooldown.component.scss']
})
export class SkillCooldownComponent implements OnInit, OnChanges {

  @Input()
  public userSkills: PlayerSkill[];

  public userSkillsWithCooldown: PlayerSkill[];
  public eliteMonsterSkills: PlayerSkill[];
  public strongMonsterSkills: PlayerSkill[]
  public otherSkills: PlayerSkill[];

  public constructor() { }

  public ngOnInit(): void {
    if (this.userSkills) {
      this.userSkillsWithCooldown = this.getCooldownPlayerSkillsList(this.userSkills);
      this.eliteMonsterSkills = this.getEliteMonsterSkills();
      this.strongMonsterSkills = this.getStrongMonsterSkills();
      this.otherSkills = this.getOtherSkills();
    }
  }

  public ngOnChanges(): void {
    if (this.userSkills) {
      this.userSkillsWithCooldown = this.getCooldownPlayerSkillsList(this.userSkills);
      this.eliteMonsterSkills = this.getEliteMonsterSkills();
      this.strongMonsterSkills = this.getStrongMonsterSkills();
      this.otherSkills = this.getOtherSkills();
    }
  }

  public hasEliteMonster(): boolean {
    let result = false;
    if (this.eliteMonsterSkills && this.eliteMonsterSkills.length > 0) {
      result = true;
    }

    return result;
  }

  public hasStrongMonster(): boolean {
    let result = false;
    if (this.strongMonsterSkills && this.strongMonsterSkills.length > 0) {
      result = true;
    }

    return result;
  }

  public hasOtherSkills(): boolean {
    let result = false;
    if (this.otherSkills && this.otherSkills.length > 0) {
      result = true;
    }

    return result;
  }

  public getEliteMonsterSkills() {
    const eliteMonsterArray = this.userSkillsWithCooldown.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillCategory === SkillCategory.ELITE_MONSTER;
    }).sort(this.sortSkills);

    return eliteMonsterArray;
  }

  public getStrongMonsterSkills() {
    const strongMonsterArray = this.userSkillsWithCooldown.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillCategory === SkillCategory.STRONG_MONSTER;
    }).sort(this.sortSkills);

    return strongMonsterArray;
  }

  public getOtherSkills() {
    const strongMonsterArray = this.userSkillsWithCooldown.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillCategory !== SkillCategory.STRONG_MONSTER && playerSkill.skillCategory !== SkillCategory.ELITE_MONSTER;
    });

    return strongMonsterArray;
  }

  public getEliteMonsterCooldown(): number {
    const cooldown = this.eliteMonsterSkills[0].cooldown;
    return cooldown;
  }

  public getStrongMonsterCooldown() {
    const cooldown = this.strongMonsterSkills[0].cooldown;
    return cooldown;
  }

  public getEliteMonsterCooldownString() {
    const result = this.getCooldownString(this.eliteMonsterSkills[0]);
    return result;
  }

  public getStrongMonsterCooldownString() {
    const result = this.getCooldownString(this.strongMonsterSkills[0]);
    return result;
  }

  public getCooldownPlayerSkillsList(userSkills: PlayerSkill[]): PlayerSkill[] {
    const playerUserSkillsWithCooldown: PlayerSkill[] = userSkills
      .filter((skill: PlayerSkill): boolean => {
        return skill.skillType === SkillType.USER;
      }).filter((skill: PlayerSkill): boolean => {
        return skill.cooldown && skill.cooldown > 0;
      }).sort((playerSkill1: PlayerSkill, playerSkill2: PlayerSkill): number => {
        // reverse order
        if (playerSkill1.cooldown > playerSkill2.cooldown) {
          return -1;
        } else if (playerSkill1.cooldown === playerSkill2.cooldown) {
          return 0;
        } else if (playerSkill1.cooldown < playerSkill2.cooldown) {
          return 1;
        }

        return -1;
      });

    return playerUserSkillsWithCooldown;
  }

  public getCooldownString(userSkill: PlayerSkill): string {
    let newCooldownString = ''

    if (userSkill.cooldown >= 5) {
      newCooldownString = '(cannot use)';
    } else if (userSkill.cooldown === 4) {
      newCooldownString = '(-4 EXP, -10 priority)';
    } else if (userSkill.cooldown === 3) {
      newCooldownString = '(-3 EXP, -7 priority)';
    } else if (userSkill.cooldown === 2) {
      newCooldownString = '(-2 EXP, -5 priority)';
    } else if (userSkill.cooldown === 1) {
      newCooldownString = '(-1 EXP, -3 priority)';
    }

    return newCooldownString;
  }

  public hasSkillCooldowns(): boolean {
    const playerUserSkillsWithCooldown: PlayerSkill[] = this.userSkillsWithCooldown;
    const result = playerUserSkillsWithCooldown.length > 0;
    return result;
  }

   public getColorForSkill(playerSkill: PlayerSkill): string {
    const result = getColorForSkill(playerSkill);
    return result;
  }

  protected sortSkills(playerSkill1: PlayerSkill, playerSkill2: PlayerSkill): number {
    const sortResult = sortSkillsByName(playerSkill1, playerSkill2);
    return sortResult;
  }

}
