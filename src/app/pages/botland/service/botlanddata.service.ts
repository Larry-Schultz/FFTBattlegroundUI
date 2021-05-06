import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse, GenericElementOrdering } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';


@Injectable({
  providedIn: 'root'
})
export class BotlandDataService {

  protected serviceUrl: string = getBackendUrl() + 'botland';

  constructor(private http: HttpClient) {}

  find(): Observable<GenericResponse<BotlandData>> {
    const url = this.serviceUrl;
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

  constructor(botlandData: BotlandData) {
    this.botData = botlandData.botData;
    this.primaryBotAccountName = botlandData.primaryBotAccountName;
    this.primaryBotName = botlandData.primaryBotName;
    this.botConfigData = this.convertBotConfigDataToMap(botlandData.botConfigData);
    this.botHourlyDataMap = this.convertBotHourlyDataToMap(botlandData.botHourlyDataMap);
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


export interface BotlandData {
    botData: Bots[];
    primaryBotAccountName: string;
    primaryBotName: string;
    botConfigData: BotlandConfigData[];
    botHourlyDataMap: BotlandHourlyData[];
}

export interface BotlandConfigData {
    botName: string;
    botConfigData: BotData;
}

export interface BotData {
    name: string;
    classname: string;
    canPrimary: boolean;
    description: string;
    params: BotParamData[];
}

export interface BotParamData {
    paramName: string;
    param: BotParam;
}

export interface BotParam {
    name: string;
    value: string;
    description: string;
}

export interface Bots {
    dateString: string;
    player: string;
    balance: number;
    wins: number;
    losses: number;
    highestKnownValue: number;
    winPercentage: number;
}

export interface BotlandHourlyData {
    botName: string;
    botHourlyData: GenericElementOrdering<BotHourlyData>[];
}

export interface BotHourlyData {
    player: string;
    hourString: string;
    hourValue: number;
    balance: number;
}
