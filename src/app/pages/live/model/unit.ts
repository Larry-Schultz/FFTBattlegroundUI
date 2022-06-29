import { Gender } from './BattleGroundEvents/gender';

export interface Unit {
	Name: string;
	Gender: Gender;
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

