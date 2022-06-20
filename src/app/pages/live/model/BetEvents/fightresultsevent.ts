import { ResultsEvent } from './resultsevent';
import { Allegiance } from 'src/app/model/playerRecord';

export interface FightResultsEvent extends ResultsEvent {
	loser: Allegiance;
}
