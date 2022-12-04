import { AllegianceLeaderboard } from './AllegianceLeaderboard';

export interface AllegianceLeaderboardWrapper {
  leaderboards: AllegianceLeaderboard[];
  gilCap: number;
  generationDate: number;
}
