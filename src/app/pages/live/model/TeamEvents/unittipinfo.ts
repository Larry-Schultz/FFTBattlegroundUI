import { GenericPairing } from 'src/app/util/genericresponse';

export interface UnitTipInfo {
	classTip: string;
	signTip: string;
	actionSkillTip: string;
	reactionSkillTip: string;
	moveSkillTip: string;
	mainhandTip: string;
	offhandTip: string;
	headTip: string;
	armorTip: string;
	accessoryTip: string;
    skillTips: GenericPairing<string, string>[];
}