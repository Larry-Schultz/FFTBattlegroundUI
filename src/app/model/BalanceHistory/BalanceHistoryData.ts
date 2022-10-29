import { LeaderboardBalanceHistory } from "./LeaderboardBalanceHistory";

export interface BalanceHistoryData {
  labels: number[];
  leaderboardBalanceHistories: LeaderboardBalanceHistory[];
  standardSize: number;
}
