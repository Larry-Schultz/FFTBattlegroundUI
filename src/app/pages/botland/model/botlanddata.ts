import { Bots } from './bots';
import { BotlandConfigData } from './botlandconfigdata';
import { BotlandHourlyData } from './botlandhourlydata';
import { GenericPairing } from 'src/app/util/genericresponse';

export interface BotlandData {
    botData: Bots[];
    primaryBotAccountName: string;
    primaryBotName: string;
    botConfigData: BotlandConfigData[];
    botHourlyDataMap: BotlandHourlyData[];
    lastBotPersonalityResponses: GenericPairing<string, string>[]
}