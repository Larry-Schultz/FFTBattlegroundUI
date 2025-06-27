import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BalanceHistoryData } from 'src/app/model/BalanceHistory/BalanceHistoryData';
import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Injectable({
  providedIn: 'root'
})
export class PlaylistSongOccurenceCountService {

  public constructor(private http: HttpClient) {

  }

  find(): Observable<GenericResponse<BalanceHistoryData>> {
    const url = getBackendUrl() + 'music/songOccurencesCount';
    const response: Observable<GenericResponse<BalanceHistoryData>> = this.http.get<GenericResponse<BalanceHistoryData>>(url);
    return response;
  }
}
