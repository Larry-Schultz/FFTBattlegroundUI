import { GenericElementOrdering, GenericPairing } from 'src/app/util/genericresponse';
import { BotlandLeaderboardEntry } from './botlandleaderboardentry';

export interface BotlandLeaderboard {
    botlandEntries: GenericElementOrdering<BotlandLeaderboardEntry>[];
    botlandWinners: GenericElementOrdering<GenericPairing<string, string>>[];
}