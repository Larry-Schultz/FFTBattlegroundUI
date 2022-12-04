import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { PlayerLeaderboardData } from '../model/PlayerLeaderboardData';

@Injectable({
  providedIn: 'root'
})
export class PlayerLeaderboardDataService {
  protected serviceUrl: string = getBackendUrl() + 'leaderboard';

  constructor(private http: HttpClient) {
  }

  find(): Observable<GenericResponse<PlayerLeaderboardData>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<PlayerLeaderboardData>> = this.http.get<GenericResponse<PlayerLeaderboardData>>(url);
    return response;
  }

}
