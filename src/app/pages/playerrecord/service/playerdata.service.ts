import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { PlayerRecord } from 'src/app/model/playerRecord';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  serviceUrl: string = getBackendUrl() + 'player/';

  constructor(private http: HttpClient) {

  }

  public find(player: string): Observable<GenericResponse<PlayerData>> {
    const response: Observable<GenericResponse<PlayerData>> = this.http.get<GenericResponse<PlayerData>>(this.generateUrl(player));
    return response;
  }

  protected generateUrl(player: string) {
    let result: string = null;
    if (player == null || typeof player === undefined) {
      result = this.serviceUrl;
    } else {
      result = this.serviceUrl + player;
    }

    return result;
  }

}

export interface PlayerData {
    playerRecord: PlayerRecord;
    portraitUrl: string;
    fightRatio: string;
    betRatio: string;
    containsPrestige: boolean;
    bot: boolean;
    prestigeLevel: number;
    leaderboardPosition: number;
    timezoneFormattedDateString: string;
    expRank: number;
    percentageOfGlobalGil: string;
    notFound: boolean;
    betPercentile: number;
    fightPercentile: number;
}
