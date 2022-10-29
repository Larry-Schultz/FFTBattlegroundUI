import { BotLeaderboard } from "./BotLeaderboard";


export interface BotLeaderboardData {
  botLeaderboard: BotLeaderboard[];
  inactiveBots: BotLeaderboard[]
  generationDateString: string;
}
