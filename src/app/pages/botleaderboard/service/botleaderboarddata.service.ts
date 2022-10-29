import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { BotLeaderboardData } from '../model/BotLeaderboardData';

@Injectable({
  providedIn: 'root'
})
export class BotLeaderboardDataService {
  protected serviceUrl: string = getBackendUrl() + 'botleaderboard';

  constructor(private http: HttpClient) {
  }

  find(): Observable<GenericResponse<BotLeaderboardData>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<BotLeaderboardData>> = this.http.get<GenericResponse<BotLeaderboardData>>(url);
    return response;
  }
}


