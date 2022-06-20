import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Allegiance, PlayerRecord } from 'src/app/model/playerRecord';
import { GenericPairing } from 'src/app/util/genericresponse';

export interface TeamInfoEvent extends BattleGroundEvent {
    team: Allegiance;
	playerUnitPairs: GenericPairing<string, string>[];
    metaData: PlayerRecord[];
}