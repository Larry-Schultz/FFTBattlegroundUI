import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';

export interface MusicEvent extends BattleGroundEvent {
    songName: string;
    durationInSeconds: number;
    id: string;
}