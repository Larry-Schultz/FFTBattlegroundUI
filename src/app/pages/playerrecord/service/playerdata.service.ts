import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { PlayerData } from '../model/PlayerData';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  serviceUrl: string = getBackendUrl() + 'player/';

  constructor(private http: HttpClient) {

  }

  public find(player: string, refresh: boolean): Observable<GenericResponse<PlayerData>> {
    const response: Observable<GenericResponse<PlayerData>> = this.http.get<GenericResponse<PlayerData>>(this.generateUrl(player, refresh));
    return response;
  }

  protected generateUrl(player: string, refresh: boolean) {
    let result: string = null;
    if (player == null || typeof player === undefined) {
      result = this.serviceUrl;
    } else {
      if (refresh) {
        result = this.serviceUrl + player + '?refresh=true';
      } else {
        result = this.serviceUrl + player;
      }
    }

    return result;
  }

}


