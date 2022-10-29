import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

export interface BettingEndsEvent extends BattleGroundEvent {
	team1: Allegiance;
	team1Bets: number;
	team1Amount: number;

	team2: Allegiance;
	team2Bets: number;
	team2Amount: number;
}
