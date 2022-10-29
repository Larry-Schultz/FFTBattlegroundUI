import { FightEntryEvent } from '../../../model/FightEvents/fightentryevent';
import { BattleGroundEventType } from '../../../model/BattleGroundEvents/battlegroundeventtype';
import { Gender } from '../../../model/BattleGroundEvents/gender';
import { PlayerRecord } from 'src/app/model/PlayerRecord/PlayerRecord';
import { getFixedDecimal } from 'src/app/util/util';

export class FightEntry implements FightEntryEvent {
  public eventTime: number;
  public eventType: BattleGroundEventType;

  public player: string;
  public className: string;
  public gender: Gender;
  public skill: string;
  public exclusionSkill: string;

  public command: string;

  public metadata: PlayerRecord;
  public gilCost: number;
  public sortingGilCost: number;
  public skillPrestige: boolean;
  public exclusionSkillPrestige: boolean;

  public classDescription: string;
  public skillDescription: string;
  public exclusionSkillDescription: string;

  public classColor: string;
  public skillColor: string;
  public exclusionSkillColor: string;

  public ratioString: string;

  public constructor(event: FightEntryEvent) {
    this.eventTime = event.eventTime;
    this.eventType = event.eventType;

    this.player = event.player;
    this.className = event.className;
    this.gender = event.gender;
    this.skill = event.skill;
    this.exclusionSkill = event.exclusionSkill;

    this.command = event.command;

    this.metadata = event.metadata
    this.gilCost = event.gilCost;
    this.sortingGilCost = event.sortingGilCost;
    this.skillPrestige = event.skillPrestige;
    this.exclusionSkillPrestige = event.exclusionSkillPrestige;

    this.classDescription = event.classDescription;
    this.skillDescription = event.skillDescription;
    this.exclusionSkillDescription = event.exclusionSkillDescription;

    this.classColor = event.classColor;
    this.skillColor = event.skillColor;
    this.exclusionSkillColor = event.exclusionSkillColor;

    this.ratioString = this.createRatioString();
  }

    // 1 < 2 (-1), 1 == 2 (0), 1 > 2 (1)
  public static compare(entry1: FightEntry, entry2: FightEntry): number {
    const entry1SortAmount: number = entry1.sortingGilCost
    const entry2SortAmount: number = entry2.sortingGilCost;

    let result = 0;
    if (entry1SortAmount < entry2SortAmount) {
      result = 1;
    } else if (entry1SortAmount > entry2SortAmount) {
      result = -1;
    } else {
      result = entry1.player.localeCompare(entry2.player);
    }

    return result;
  }

  protected createRatioString(): string {
    const wins: number = this.metadata.fightWins;
    const losses: number = this.metadata.fightLosses;
    const ratio: number = (wins + 1) / (wins + losses + 1);
    const ratioString: string = 'Wins: ' + wins.toString() + ' Losses: ' + losses.toString() + ' Ratio: '
      + getFixedDecimal(ratio, 2).toString();

    return ratioString;
  }
}
