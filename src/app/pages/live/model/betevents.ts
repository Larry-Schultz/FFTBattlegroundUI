import { PlayerRecord, Allegiance } from 'src/app/model/playerRecord';
import {BattleGroundEvent, BetType } from './battlegroundevent';

export interface BetEvent extends BattleGroundEvent {
    player: string;
	team: Allegiance;
	betAmount: string;
	betText: string;
	betType: BetType;
	allinbutFlag: boolean;
	isSubscriber: boolean;

	metadata: PlayerRecord;
}

export interface BetInfoEvent extends BattleGroundEvent {
    player: string;
	betAmount: number;
	team: Allegiance;
	percentage: string;
	possibleEarnings: number;
	isSubscriber: boolean;

	metadata: PlayerRecord;
}

export interface BettingBeginsEvent extends BattleGroundEvent {
    team1: Allegiance;
    team2: Allegiance;
}

export interface BadBetEvent extends BattleGroundEvent {
    players: string[];
}

export interface ResultsEvent extends BattleGroundEvent {
	winner: Allegiance;
}

export interface BettingEndsEvent extends BattleGroundEvent {
	team1: Allegiance;
	team1Bets: number;
	team1Amount: number;
	
	team2: Allegiance;
	team2Bets: number;
	team2Amount: number;
}
