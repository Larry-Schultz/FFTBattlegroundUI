import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Hype } from './hype';

export interface HypeEvent extends BattleGroundEvent {
    player: string;
    hypeEmotes: Hype[];
}
