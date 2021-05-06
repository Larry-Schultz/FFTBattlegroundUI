import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Injectable({
  providedIn: 'root'
})
export class PlayerListService {

  protected serviceUrl: string = getBackendUrl() + 'api/players/playerList';

  constructor(private http: HttpClient) {

  }

  find(): Observable<GenericResponse<string[]>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<string[]>> = this.http.get<GenericResponse<string[]>>(this.serviceUrl);
    return response;
  }
}
