import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Gender } from '../BattleGroundEvents/gender';
import { PlayerRecord } from 'src/app/model/PlayerRecord/PlayerRecord';

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


