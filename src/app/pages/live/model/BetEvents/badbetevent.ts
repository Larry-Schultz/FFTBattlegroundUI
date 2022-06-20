import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';

export interface BadBetEvent extends BattleGroundEvent {
    players: string[];
}
