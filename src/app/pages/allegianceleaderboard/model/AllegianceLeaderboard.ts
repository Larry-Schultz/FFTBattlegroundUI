import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { AllegianceLeaderboardEntry } from './AllegianceLeaderboardEntry';


export interface AllegianceLeaderboard {
  position: number;
  team: Allegiance;
  totalGil: number;
  totalPlayers: number;
  gilPerPlayer: number;
  totalLevels: number;
  totalLevelsPerPlayer: number;
  totalPrestiges: number;
  portraitUrl: string;
  betWins: number;
  betLosses: number;
  fightWins: number;
  fightLosses: number;
  currentSeasonFightWinsAsChampion: number;
  totalMillionaires: number;
  betRatio: number;
  fightRatio: number;
  betQuantile: number;
  fightQuantile: number;
  betWinUnderdog: boolean;
  fightWinUnderdog: boolean;
  gilUnderdog: boolean;
  leaderboard: AllegianceLeaderboardEntry[];
}
