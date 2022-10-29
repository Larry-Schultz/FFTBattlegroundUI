import { ResultsEvent } from './resultsevent';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

export interface FightResultsEvent extends ResultsEvent {
	loser: Allegiance;
}
