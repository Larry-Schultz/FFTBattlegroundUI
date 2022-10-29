import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";

@Injectable({
  providedIn: 'root'
})
export class ExpLeaderboardService {
  protected serviceUrl: string = getBackendUrl() + 'expLeaderboard';

  constructor(private http: HttpClient) {
  }

  find(): Observable<GenericResponse<ExpLeaderboardData>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<ExpLeaderboardData>> = this.http.get<GenericResponse<ExpLeaderboardData>>(url);
    return response;
  }
}

export interface ExpLeaderboardData {
    expLeaderboard: ExpLeaderboard;
    generationDateString: string;
}

export interface ExpLeaderboard {
    leaderboardEntries: ExpLeaderboardEntry[];
}

export interface ExpLeaderboardEntry {
    rank: number;
    player: string;
    level: number;
    exp: number;
    lastActive: string;
    prestigeLevel: number;
    team: Allegiance;
}
