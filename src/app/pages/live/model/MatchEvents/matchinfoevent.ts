import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance } from 'src/app/model/playerRecord';

export interface MatchInfoEvent extends BattleGroundEvent {
    team1: Allegiance;
    team2: Allegiance;
    mapNumber: number;
    mapName: string;
}
