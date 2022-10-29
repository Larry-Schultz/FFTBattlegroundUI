import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { PlayerRecord } from 'src/app/model/PlayerRecord/PlayerRecord';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

export interface BetInfoEvent extends BattleGroundEvent {
    player: string;
	betAmount: number;
	team: Allegiance;
	percentage: string;
	possibleEarnings: number;
	isSubscriber: boolean;

	metadata: PlayerRecord;
}
