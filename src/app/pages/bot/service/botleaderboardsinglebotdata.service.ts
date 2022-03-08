import { Injectable } from '@angular/core';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericResponse } from 'src/app/util/genericresponse';
import { BotlandLeaderboardEntry } from '../../botland/model/botlandleaderboardentry';

@Injectable({
  providedIn: 'root'
})
export class BotLeaderboardSingleBotDataService {

  protected serviceUrl: string = getBackendUrl() + 'botlandleaderboard/';

  constructor(private http: HttpClient) {}

  find(botName: string): Observable<GenericResponse<BotlandLeaderboardEntry>> {
    const url = this.serviceUrl + botName;
    const response: Observable<GenericResponse<BotlandLeaderboardEntry>> = this.http.get<GenericResponse<BotlandLeaderboardEntry>>(url);
    return response;
  }
}
