import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse, GenericElementOrdering, convertGenericPairingListToMap } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { Bots } from '../model/bots';
import { BotHourlyData } from '../model/bothourlydata';
import { BotlandData } from '../model/botlanddata';
import { BotlandConfigData } from '../model/botlandconfigdata';
import { BotlandHourlyData } from '../model/botlandhourlydata';
import { BotParam } from '../model/botparam';
import { BotData } from '../model/botdata';
import { BotParamData } from '../model/botparamdata';


@Injectable({
  providedIn: 'root'
})
export class BotlandDataService {

  protected serviceUrl: string = getBackendUrl() + 'botland';

  constructor(private http: HttpClient) {}

  find(refresh: boolean): Observable<GenericResponse<BotlandData>> {
    let url = this.serviceUrl;
    if (refresh) {
      url = url + '?refresh=true';
    }
    const response: Observable<GenericResponse<BotlandData>> = this.http.get<GenericResponse<BotlandData>>(url);
    return response;
  }
}

export class CleanedBotlandData {
  public botData: Bots[];
  public primaryBotAccountName: string;
  public primaryBotName: string;
  public botConfigData: Map<string, CleanedBotData>;
  public botHourlyDataMap: Map<string, GenericElementOrdering<BotHourlyData>[]>;
  public lastBotPersonalityResponses: Map<string, string>

  constructor(botlandData: BotlandData) {
    this.botData = botlandData.botData;
    this.primaryBotAccountName = botlandData.primaryBotAccountName;
    this.primaryBotName = botlandData.primaryBotName;
    this.botConfigData = this.convertBotConfigDataToMap(botlandData.botConfigData);
    this.botHourlyDataMap = this.convertBotHourlyDataToMap(botlandData.botHourlyDataMap);
    this.lastBotPersonalityResponses = convertGenericPairingListToMap(botlandData.lastBotPersonalityResponses);
  }

  protected convertBotConfigDataToMap(botConfigData: BotlandConfigData[]): Map<string, CleanedBotData> {
    const botDataMap: Map<string, CleanedBotData> = new Map<string, CleanedBotData>();
    for (const botData of botConfigData) {
      botDataMap.set(botData.botName, new CleanedBotData(botData.botConfigData));
    }

    return botDataMap;
  }

  protected convertBotHourlyDataToMap(hourlyDataArray: BotlandHourlyData[]): Map<string, GenericElementOrdering<BotHourlyData>[]> {
    const botHourlyDataMap = new Map<string, GenericElementOrdering<BotHourlyData>[]>();
    for (const hourlyData of hourlyDataArray) {
      botHourlyDataMap.set(hourlyData.botName, hourlyData.botHourlyData);
    }

    return botHourlyDataMap;
  }
}

export class CleanedBotData {
  public name: string;
  public classname: string;
  public canPrimary: boolean;
  public description: string;
  public params: Map<string, BotParam>;

  constructor(botData: BotData) {
    this.name = botData.name;
    this.classname = botData.classname;
    this.canPrimary = botData.canPrimary;
    this.description = botData.description;
    this.params = this.convertParamsToMap(botData.params);
  }

  protected convertParamsToMap(paramList: BotParamData[]) {
    const paramMap: Map<string, BotParam> = new Map<string, BotParam>();
    for (const botParamData of paramList) {
      paramMap.set(botParamData.paramName, botParamData.param);
    }

    return paramMap;
  }
}
