import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { AllegianceLeaderboardWrapper } from '../model/AllegianceLeaderboardWrapper';

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


