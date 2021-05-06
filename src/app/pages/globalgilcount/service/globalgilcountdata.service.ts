import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Injectable({
  providedIn: 'root'
})
export class GlobalGilCountDataService {
  protected serviceUrl: string = getBackendUrl() + 'gilCount';

  constructor(private http: HttpClient) {
  }

  find(): Observable<GenericResponse<GlobalGilCountData>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<GlobalGilCountData>> = this.http.get<GenericResponse<GlobalGilCountData>>(url);
    return response;
  }
}

export interface GlobalGilCountData {
    todaysCount: TodaysCount;
    countByDay: TodaysCount[];
    countByWeek: TodaysCount[];
    countByMonth: TodaysCount[];
    countByYear: TodaysCount[];
}

export interface TodaysCount {
    date: number;
    gilPerPlayer: number;
    globalGilCountWebFormat: string;
    dateWebFormat: string;
    gilPerPlayerWebFormat: string;
    playerCountWebFormat: string;
}

