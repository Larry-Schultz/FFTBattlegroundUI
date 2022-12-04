import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlayerSkill } from 'src/app/model/PlayerRecord/PlayerSkill';
import { SkillType } from 'src/app/model/PlayerRecord/SkillType';
import { PlayerData } from "../../model/PlayerData";
import { skillCategoryOrderingMap } from '../../util/skillsUtils';

@Component({
  selector: 'app-player-record-core',
  templateUrl: './player-record-core.component.html',
  styleUrls: ['./player-record-core.component.scss']
})
export class PlayerRecordCoreComponent implements OnInit, OnChanges {

  @Input()
  public userSkills: PlayerSkill[];

  @Input()
  public prestigeSkills: PlayerSkill[];

  @Input()
  public playerData: PlayerData;

  public constructor() { }


  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {

  }

  public calculatePrestigeLevel(): number {
    let result = 0;
    if (this.prestigeSkills) {
      result = this.prestigeSkills.length;
    }

    return result;
  }

  protected generatePrestigeSkillList(): PlayerSkill[] {
    const result: PlayerSkill[] = this.playerData.playerRecord.prestigeSkills.filter((playerSkill: PlayerSkill): boolean => {
      return this.playerData.prestigeSkills.includes(playerSkill.skill);
    }).sort((playerSkill1: PlayerSkill, playerSkill2: PlayerSkill): number => {
      let sortResult = 0;
      if (playerSkill1.skill < playerSkill2.skill) {
        sortResult = -1;
      } else if (playerSkill1.skill > playerSkill2.skill) {
        sortResult = 1;
      }
      return sortResult;
    });

    return result;
  }

  protected generateUserSkillsList(): PlayerSkill[] {
    const result: PlayerSkill[] = this.playerData.playerRecord.playerSkills.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillType === SkillType.USER;
    }).sort(this.sortPlayerSkillsByCategory);

    return result;
  }

  protected sortPlayerSkillsByCategory(playerSkill1: PlayerSkill, playerSkill2: PlayerSkill): number {
      const playerSkill1CategoryNumber: number = skillCategoryOrderingMap.get(playerSkill1.skillCategory);
      const playerSkill2CategoryNumber: number = skillCategoryOrderingMap.get(playerSkill2.skillCategory);

      let sortResult = 0;
      if (playerSkill1CategoryNumber < playerSkill2CategoryNumber) {
        sortResult = -1;
      } else if (playerSkill1CategoryNumber > playerSkill2CategoryNumber) {
        sortResult = 1;
      } else {
        if (playerSkill1.skill < playerSkill2.skill) {
          sortResult = -1;
        } else if (playerSkill1.skill > playerSkill2.skill) {
          sortResult = 1;
        }
      }

      return sortResult;
    }

}
