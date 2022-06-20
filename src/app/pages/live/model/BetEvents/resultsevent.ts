import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance } from 'src/app/model/playerRecord';

export interface ResultsEvent extends BattleGroundEvent {
	winner: Allegiance;
}