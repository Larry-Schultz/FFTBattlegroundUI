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
    prestigeSkills: PlayerSkill[];
    lastActive: number;
    lastFightActive: number;
    isSubscriber: boolean;
    createdSource?: any;
    updateSource: string;
    subscriber: boolean;
    snubStreak: number;
}

export interface PlayerSkill {
    skill: string;
    skillType: SkillType;
    metadata: string;
    cooldown: number;
    skillCategory: SkillCategory;
}

export enum SkillType {
  USER = 'USER',
  PRESTIGE = 'PRESTIGE'
}

export enum SkillCategory {
  NORMAL = 'NORMAL',
  MONSTER = 'MONSTER',
  STRONG_MONSTER = 'STRONG_MONSTER',
  ELITE_MONSTER = 'ELITE_MONSTER',
  JOB = 'JOB',
  REACTION = 'REACTION',
  MOVEMENT = 'MOVEMENT',
  EQUIPMENT = 'EQUIPMENT',
  SUPPORT = 'SUPPORT',
  ENTRY = 'ENTRY',
  LEGENDARY = 'LEGENDARY',
  PRESTIGE = 'PRESTIGE',
  NONE = 'NONE'
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
