import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { Allegiance } from 'src/app/model/playerRecord';

@Injectable({
  providedIn: 'root'
})
export class AllegianceLeaderboardDataService {

  constructor(private http: HttpClient) { }

  find(): Observable<GenericResponse<AllegianceLeaderboardWrapper>> {
    const url = getBackendUrl() + 'allegianceLeaderboard';
    const response: Observable<GenericResponse<AllegianceLeaderboardWrapper>> =
      this.http.get<GenericResponse<AllegianceLeaderboardWrapper>>(url);
    return response;
  }
}

export interface AllegianceLeaderboardWrapper {
    leaderboards: AllegianceLeaderboard[];
    generationDate: number;
}

export interface AllegianceLeaderboard {
    position: number;
    team: Allegiance;
    totalGil: number;
    totalPlayers: number;
    gilPerPlayer: number;
    totalLevels: number;
    totalLevelsPerPlayer: number;
    totalPrestiges: number;
    portraitUrl: string;
    betWins: number;
    betLosses: number;
    fightWins: number;
    fightLosses: number;
    currentSeasonFightWinsAsChampion: number;
    betRatio: number;
    fightRatio: number;
    betQuantile: number;
    fightQuantile: number;
    betWinUnderdog: boolean;
    fightWinUnderdog: boolean;
    gilUnderdog: boolean;
    leaderboard: AllegianceLeaderboardEntry[];
}

export interface AllegianceLeaderboardEntry {
    name: string;
    position: number;
    balance: number;
}
