import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

export interface BettingBeginsEvent extends BattleGroundEvent {
    team1: Allegiance;
    team2: Allegiance;
}
