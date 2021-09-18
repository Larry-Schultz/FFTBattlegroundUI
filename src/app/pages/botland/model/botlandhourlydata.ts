import { GenericElementOrdering } from 'src/app/util/genericresponse';
import { BotHourlyData } from './bothourlydata';

export interface BotlandHourlyData {
    botName: string;
    botHourlyData: GenericElementOrdering<BotHourlyData>[];
}