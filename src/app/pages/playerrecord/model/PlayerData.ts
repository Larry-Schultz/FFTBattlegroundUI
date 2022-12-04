import { PlayerRecord } from 'src/app/model/PlayerRecord/PlayerRecord';

export interface PlayerData {
  playerRecord: PlayerRecord;
  portraitUrl: string;
  fightRatio: string;
  betRatio: string;
  containsPrestige: boolean;
  bot: boolean;
  prestigeLevel: number;
  leaderboardPosition: number;
  timezoneFormattedDateString: string;
  timezoneFormattedLastFightActiveDateString: string;
  expRank: number;
  percentageOfGlobalGil: string;
  notFound: boolean;
  betPercentile: number;
  fightPercentile: number;
  classBonuses: string[];
  skillBonuses: string[];
  prestigeSkills: string[];
}
