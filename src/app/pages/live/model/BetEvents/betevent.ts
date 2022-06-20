import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance, PlayerRecord } from 'src/app/model/playerRecord';
import { BetType } from '../BattleGroundEvents/bettype';

export interface BetEvent extends BattleGroundEvent {
    player: string;
	team: Allegiance;
	betAmount: string;
	betText: string;
	betType: BetType;
	allinbutFlag: boolean;
	isSubscriber: boolean;

	metadata: PlayerRecord;
}