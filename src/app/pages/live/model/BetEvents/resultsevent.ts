import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

export interface ResultsEvent extends BattleGroundEvent {
	winner: Allegiance;
}
