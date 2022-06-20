import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';

export interface FightBeginsEvent extends BattleGroundEvent {
    skillDrop: string;
}