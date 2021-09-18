import { Bots } from '../../botland/model/bots';
import { BotData } from '../../botland/model/botdata';
import { GenericElementOrdering } from 'src/app/util/genericresponse';
import { BotHourlyData } from '../../botland/model/bothourlydata';

export interface BotResponseData {
  botName: string;
  bot: Bots;
  botData: BotData;
  botHourlyDataMap: GenericElementOrdering<BotHourlyData>[];
  lastBotResponse: string;

}