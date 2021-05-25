import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PlayerSkill, SkillCategory, SkillType } from 'src/app/model/playerRecord';

@Component({
  selector: 'app-skillcolorlegend',
  templateUrl: './skillcolorlegend.component.html',
  styleUrls: ['./skillcolorlegend.component.scss']
})
export class SkillColorLegendComponent implements OnInit, OnChanges {

  @Input()
  public playerSkills: PlayerSkill[];

  public trackedSkillCategories: SkillCategory[] = [ SkillCategory.ELITE_MONSTER, SkillCategory.STRONG_MONSTER, SkillCategory.MONSTER, 
    SkillCategory.EQUIPMENT, SkillCategory.ENTRY, SkillCategory.JOB, SkillCategory.SUPPORT, SkillCategory.REACTION, 
    SkillCategory.MOVEMENT, SkillCategory.LEGENDARY];

  public constructor() { }

  public ngOnInit(): void {

  }

  public ngOnChanges(): void {

  }

  public playerHasEliteMonsteer(): boolean {
    return this.playerHasSkillCategory(SkillCategory.ELITE_MONSTER);
  }

  public playerHasStrongMonster(): boolean {
    return this.playerHasSkillCategory(SkillCategory.STRONG_MONSTER);
  }

  public playerHasMonster(): boolean {
    return this.playerHasSkillCategory(SkillCategory.MONSTER);
  }

  public playerHasLegendary(): boolean {
    return this.playerHasSkillCategory(SkillCategory.LEGENDARY);
  }

  public playerHasEquipment(): boolean {
    return this.playerHasSkillCategory(SkillCategory.EQUIPMENT);
  }

  public playerHasEntry(): boolean {
    return this.playerHasSkillCategory(SkillCategory.ENTRY);
  }

  public playerHasJob(): boolean {
    return this.playerHasSkillCategory(SkillCategory.JOB);
  }

  public playerHasSupport(): boolean {
    return this.playerHasSkillCategory(SkillCategory.SUPPORT);
  }

  public playerHasReaction(): boolean {
    return this.playerHasSkillCategory(SkillCategory.REACTION);
  }

  public playerHasMovement(): boolean {
    return this.playerHasSkillCategory(SkillCategory.MOVEMENT);
  }

  protected getColorForSkill(skillCategory: SkillCategory): string {
    if (skillCategory === SkillCategory.ELITE_MONSTER) {
      return 'dark blue';
    } else if (skillCategory === SkillCategory.STRONG_MONSTER) {
      return 'blue';
    } else if (skillCategory === SkillCategory.MONSTER) {
      return 'light blue';
    } else if (skillCategory === SkillCategory.LEGENDARY) {
      return 'gold';
    } else if (skillCategory === SkillCategory.EQUIPMENT) {
      return 'brown';
    } else if (skillCategory === SkillCategory.ENTRY) {
      return 'black';
    } else if (skillCategory === SkillCategory.JOB) {
      return 'purple';
    } else if (skillCategory === SkillCategory.SUPPORT) {
      return 'white';
    } else if (skillCategory === SkillCategory.REACTION) {
      return 'yellow';
    } else if (skillCategory === SkillCategory.MOVEMENT) {
      return 'red';
    }
  }

  protected playerHasSkillCategory(skillCategory: SkillCategory): boolean {
    if (!this.playerSkills || this.playerSkills.length === 0) {
      return false;
    }
    const filteredSkills = this.playerSkills.filter((playerSkill: PlayerSkill): boolean =>  {
      return playerSkill.skillCategory === skillCategory;
    });

    const result = filteredSkills.length > 0;
    return result;
  }

  public playerHasPrestigeSkill(): boolean {
    if (!this.playerSkills || this.playerSkills.length === 0) {
      return false;
    }
    const filteredSkills = this.playerSkills.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillType === SkillType.PRESTIGE;
    });

    const result = filteredSkills.length > 0;
    return result;
  }

}
