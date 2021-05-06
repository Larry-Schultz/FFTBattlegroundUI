import { PlayerRecord} from 'src/app/model/playerRecord';
import {BattleGroundEvent, Gender} from './battlegroundevent';

export interface FightBeginsEvent extends BattleGroundEvent {
    skillDrop: string;
}

export interface FightEntryEvent extends BattleGroundEvent {
    player: string;
	className: string;
	gender: Gender;
	skill: string;
	exclusionSkill: string;

	command: string;

	metadata: PlayerRecord;
	gilCost: number;
	sortingGilCost: number;
	skillPrestige: boolean;
	exclusionSkillPrestige: boolean;

	classDescription: string;
	skillDescription: string;
	exclusionSkillDescription: string;

	classColor: string;
	skillColor: string;
	exclusionSkillColor: string;
}

export interface BadFightEvent extends BattleGroundEvent {
    player: string;
}
