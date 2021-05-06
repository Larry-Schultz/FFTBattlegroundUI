import { BattleGroundEvent } from './battlegroundevent';
import { Allegiance } from 'src/app/model/playerRecord';

export interface MusicEvent extends BattleGroundEvent {
    songName: string;
    durationInSeconds: number;
    id: string;
}

export interface SkillDropEvent extends BattleGroundEvent {
    skill: string;
    skillDescription: string;
}

export interface MatchInfoEvent extends BattleGroundEvent {
    team1: Allegiance;
    team2: Allegiance;
    mapNumber: number;
    mapName: string;
}
