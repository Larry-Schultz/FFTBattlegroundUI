import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

export interface TournamentWinData {
	wins: Allegiance[];
	losses: Allegiance[];
	streak: number;
}
