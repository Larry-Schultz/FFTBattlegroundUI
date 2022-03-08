import { BattleGroundEvent } from './battlegroundevent';
import { Allegiance, PlayerRecord } from 'src/app/model/playerRecord';
import { GenericPairing } from 'src/app/util/genericresponse';

export interface TeamInfoEvent extends BattleGroundEvent {
    team: Allegiance;
	playerUnitPairs: GenericPairing<string, string>[];
    metaData: PlayerRecord[];
}

export interface UnitInfoEvent extends BattleGroundEvent {
    player: string;
	unitInfoString: string;
	unit: Unit
	isRaidBoss: boolean;
	team: Allegiance;
	position: number;
}

export interface Unit {
	Name: string;
	Gender: string;
	Sign: string;
	Brave: number;
	Faith: number;
	Class: string;
	ActionSkill: string;
	ReactionSkill: string;
	MoveSkill: string;
	Mainhand: string;
	Offhand: string;
	Head: string;
	Armor: string;
	Accessory: string;
	ClassSkills: string[];
	ExtraSkills: string[];
}

export interface TournamentUpdateEvent extends BattleGroundEvent {
	teamStillActiveMap: GenericPairing<Allegiance, boolean>[] ;
	teamInfoMap: GenericPairing<Allegiance, TeamInfoEvent>[] ;
	playerUnitInfoMap: GenericPairing<Allegiance, UnitInfoEvent[]>[]
	tournamentWinMap: GenericPairing<Allegiance, TournamentWinData>[];
}

export interface TournamentWinData {
	wins: Allegiance[];
	losses: Allegiance[];
	streak: number;
}