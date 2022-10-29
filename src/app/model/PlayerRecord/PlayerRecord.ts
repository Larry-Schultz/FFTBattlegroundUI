import { Allegiance } from "./Allegiance";
import { PlayerSkill } from "./PlayerSkill";

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


