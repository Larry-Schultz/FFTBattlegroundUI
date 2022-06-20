import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance } from 'src/app/model/playerRecord';

export interface BettingBeginsEvent extends BattleGroundEvent {
    team1: Allegiance;
    team2: Allegiance;
}