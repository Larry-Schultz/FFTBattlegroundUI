import { Injectable } from '@angular/core';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericResponse } from 'src/app/util/genericresponse';
import { BotlandLeaderboard } from '../model/botlandleaderboard';
import { BotlandLeaderboardEntry } from '../model/botlandleaderboardentry';

@Injectable({
  providedIn: 'root'
})
export class BotlandleaderboardService {

  protected serviceUrl: string = getBackendUrl() + 'botlandleaderboard';

  constructor(private http: HttpClient) {}

  find(refresh: boolean): Observable<GenericResponse<BotlandLeaderboard>> {
    let url = this.serviceUrl;
    if (refresh) {
      url = url + '?refresh=true';
    }
    const response: Observable<GenericResponse<BotlandLeaderboard>> = this.http.get<GenericResponse<BotlandLeaderboard>>(url);
    return response;
  }

  findBot(player: string): Observable<GenericResponse<BotlandLeaderboardEntry>> {
    const url = this.serviceUrl + player;
    const response: Observable<GenericResponse<BotlandLeaderboardEntry>> = this.http.get<GenericResponse<BotlandLeaderboardEntry>>(url);
    return response;
  }
}
