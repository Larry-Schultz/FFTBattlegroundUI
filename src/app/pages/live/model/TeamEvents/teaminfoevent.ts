import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { PlayerRecord } from 'src/app/model/PlayerRecord/PlayerRecord';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { GenericPairing } from 'src/app/util/genericresponse';

export interface TeamInfoEvent extends BattleGroundEvent {
    team: Allegiance;
	playerUnitPairs: GenericPairing<string, string>[];
    metaData: PlayerRecord[];
}
