import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';

export interface HypeEvent extends BattleGroundEvent {
    player: string;
    hypeEmotes: string[];
}
