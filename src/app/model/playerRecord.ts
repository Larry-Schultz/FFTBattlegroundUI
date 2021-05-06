export interface PlayerRecord {
    player: string;
    wins: number;
    losses: number;
    fightWins: number;
    fightLosses: number;
    lastKnownAmount: number;
    highestKnownAmount: number;
    lastKnownLevel: number;
    lastKnownRemainingExp: number;
    lastKnownPrestige: number;
    allegiance: Allegiance;
    portrait: string;
    playerSkills: PlayerSkill[];
    lastActive: number;
    lastFightActive: number;
    isSubscriber: boolean;
    createdSource?: any;
    updateSource: string;
    subscriber: boolean;
}

export interface PlayerSkill {
    skill: string;
    skillType: SkillType;
    metadata: string;
}

export enum SkillType {
  USER = 'USER',
  PRESTIGE = 'PRESTIGE'
}

export enum Allegiance {
  RED = 'red',
	BLUE = 'blue',
	GREEN = 'green',
	YELLOW = 'yellow',
  WHITE = 'white',
	BLACK = 'black',
	PURPLE = 'purple',
	BROWN = 'brown',
	CHAMPION = 'champion',
	LEFT = 'left',
	RIGHT = 'right',
	RANDOM = 'random',
	NONE = 'none'
}
