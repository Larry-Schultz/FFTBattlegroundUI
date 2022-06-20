import { Allegiance } from 'src/app/model/playerRecord';

export interface TournamentWinData {
	wins: Allegiance[];
	losses: Allegiance[];
	streak: number;
}