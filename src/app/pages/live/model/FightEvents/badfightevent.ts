import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';

export interface BadFightEvent extends BattleGroundEvent {
    player: string;
}