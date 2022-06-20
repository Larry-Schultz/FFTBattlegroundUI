import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';

export interface SkillDropEvent extends BattleGroundEvent {
    skill: string;
    skillDescription: string;
}