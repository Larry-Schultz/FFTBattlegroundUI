import { PlayerLeaderboardEntry } from './PlayerLeaderboardEntry';


export interface PlayerLeaderboard {
  highestPlayers: PlayerLeaderboardEntry[];
  topPlayers: PlayerLeaderboardEntry[];
  generationDate: number;
}
