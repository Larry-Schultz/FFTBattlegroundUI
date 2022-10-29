import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { GenericPairing } from 'src/app/util/genericresponse';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { TeamInfoEvent } from './teaminfoevent';
import { UnitInfoEvent } from './unitinfoevent';
import { TournamentWinData } from '../tournamentwindata';

export interface TournamentUpdateEvent extends BattleGroundEvent {
	teamStillActiveMap: GenericPairing<Allegiance, boolean>[] ;
	teamInfoMap: GenericPairing<Allegiance, TeamInfoEvent>[] ;
	playerUnitInfoMap: GenericPairing<Allegiance, UnitInfoEvent[]>[]
	tournamentWinMap: GenericPairing<Allegiance, TournamentWinData>[];
}
