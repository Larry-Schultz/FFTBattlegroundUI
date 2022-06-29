import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Allegiance } from 'src/app/model/playerRecord';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { UnitInfoEvent } from '../../model/TeamEvents/unitinfoevent';
import { Unit } from '../../model/unit';
import { Gender } from '../../model/BattleGroundEvents/gender';
import { capitalize } from 'lodash';
import { convertGenericPairingListToMap } from 'src/app/util/genericresponse';

@Component({
  selector: 'app-tournamenttrackerunititem',
  templateUrl: './tournamenttrackerunititem.component.html',
  styleUrls: ['./tournamenttrackerunititem.component.scss']
})
export class TournamentTrackerUnitItemComponent implements OnInit, OnChanges {

  @Input()
  public unitInfoEvent: UnitInfoEvent;

  @Input()
  public allegiance: Allegiance;

  public skillMap: Map<string, string> = new Map<string, string>();

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {
    if (this.unitInfoEvent && this.unitInfoEvent.unitTipInfo && this.unitInfoEvent.unitTipInfo.skillTips) {
      this.skillMap = convertGenericPairingListToMap(this.unitInfoEvent.unitTipInfo.skillTips);
    }
  }

  public generateUnitPortraitUrl(unitInfoEvent: UnitInfoEvent): string {
    const unit: Unit = unitInfoEvent.unit;
    let cleanedImageUrl = 'images/portraits/';
    if (unit.Gender === Gender.MONSTER) {
      cleanedImageUrl = cleanedImageUrl + unit.Class;
    } else if (this.allegiance !== Allegiance.CHAMPION) {
      const className: string = unit.Class;
      const genderCode: string = unit.Gender === Gender.MALE ? 'M' : 'F';
      const allegianceString: string = capitalize(this.allegiance.toLocaleLowerCase());
      
      const unitImageName: string = className + genderCode + '_' + allegianceString;
      cleanedImageUrl = cleanedImageUrl + unitImageName;
    } else {
      const className: string = unit.Class;
      const genderCode: string = unit.Gender === Gender.MALE ? 'M' : 'F';
      const unitImageName: string = className + genderCode;
      cleanedImageUrl = cleanedImageUrl + unitImageName;
    }
    const result: string = getBackendUrl() + cleanedImageUrl + '.gif';
    return result;
  }

  public loadExtraSkills(unit: Unit): boolean {
    if (!unit.ExtraSkills || unit.ExtraSkills.length === 0 || !unit.ClassSkills) {
      return false;
    }
    const extraSkillsNotInClassSkills: string[] = this.calculateExtraSkills(unit);
    if (extraSkillsNotInClassSkills && extraSkillsNotInClassSkills.length > 0 && extraSkillsNotInClassSkills) {
      return true;
    } else {
      return false;
    }
  }

  public calculateExtraSkills(unit: Unit): string[] {
    const extraSkillsNotInClassSkills = unit.ExtraSkills.filter(extraSkill => !unit.ClassSkills.includes(extraSkill));
    return extraSkillsNotInClassSkills;
  }


  public classTooltip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.classTip) {
      return unitInfoEvent.unitTipInfo.classTip;
    } else {
      return '';
    }
  }

  public signTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.signTip) {
      return unitInfoEvent.unitTipInfo.signTip;
    } else {
      return '';
    }
  }

  public actionSkillTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.actionSkillTip) {
      return unitInfoEvent.unitTipInfo.actionSkillTip;
    } else {
      return '';
    }
  }

  public reactionSkillTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.reactionSkillTip) {
      return unitInfoEvent.unitTipInfo.reactionSkillTip;
    } else {
      return '';
    }
  }

  public moveSkillTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.moveSkillTip) {
      return unitInfoEvent.unitTipInfo.moveSkillTip;
    } else {
      return '';
    }
  }

  public mainhandTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.mainhandTip) {
      return unitInfoEvent.unitTipInfo.mainhandTip;
    } else {
      return '';
    }
  }

  public offhandTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.offhandTip) {
      return unitInfoEvent.unitTipInfo.offhandTip;
    } else {
      return '';
    }
  }

  public headTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.headTip) {
      return unitInfoEvent.unitTipInfo.headTip;
    } else {
      return '';
    }
  }

  public armorTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.armorTip) {
      return unitInfoEvent.unitTipInfo.armorTip;
    } else {
      return '';
    }
  }

  public accessoryTip(unitInfoEvent: UnitInfoEvent): string {
    if (this.hasUnitTipInfo(unitInfoEvent) && unitInfoEvent.unitTipInfo.accessoryTip) {
      return unitInfoEvent.unitTipInfo.accessoryTip;
    } else {
      return '';
    }
  }

  public getClassTooltip(skill: string): string {
    const result = this.skillMap.get(skill);
    return result;
  }

  private hasUnitTipInfo(unitInfoEvent: UnitInfoEvent): boolean {
    if (unitInfoEvent && unitInfoEvent.unitTipInfo) {
      return true;
    } else {
      return false;
    }
  }n

}
