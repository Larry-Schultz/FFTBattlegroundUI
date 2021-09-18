import { Injectable } from '@angular/core';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericResponse } from 'src/app/util/genericresponse';
import { BotResponseData } from '../model/botresponsedata';

@Injectable({
  providedIn: 'root'
})
export class BotDataService {

  protected serviceUrl: string = getBackendUrl() + 'bot';

  constructor(private http: HttpClient) {}

  find(botName: string, refresh: boolean): Observable<GenericResponse<BotResponseData>> {
    const url = this.serviceUrl + '/' + botName + '?refresh=' + refresh;
    const response: Observable<GenericResponse<BotResponseData>> = this.http.get<GenericResponse<BotResponseData>>(url);
    return response;
  }

}
