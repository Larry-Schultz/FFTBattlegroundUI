import { GenericElementOrdering } from 'src/app/util/genericresponse';
import { BotlandLeaderboardEntry } from './botlandleaderboardentry';
import { BotlandWinner } from './botlandwinner';

export interface BotlandLeaderboard {
    botlandEntries: GenericElementOrdering<BotlandLeaderboardEntry>[];
    botlandWinners: GenericElementOrdering<BotlandWinner>[];
}