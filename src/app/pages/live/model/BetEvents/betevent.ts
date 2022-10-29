import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { PlayerRecord } from 'src/app/model/PlayerRecord/PlayerRecord';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
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
