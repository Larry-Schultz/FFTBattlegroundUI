import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance, PlayerRecord } from 'src/app/model/playerRecord';

export interface BetInfoEvent extends BattleGroundEvent {
    player: string;
	betAmount: number;
	team: Allegiance;
	percentage: string;
	possibleEarnings: number;
	isSubscriber: boolean;

	metadata: PlayerRecord;
}