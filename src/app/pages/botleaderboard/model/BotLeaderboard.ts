import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";


export interface BotLeaderboard {
  name: string;
  rank: number;
  gil: string;
  lastActiveDate: string;
  percentageOfGlobalGil: string;
  allegiance: Allegiance;
}
