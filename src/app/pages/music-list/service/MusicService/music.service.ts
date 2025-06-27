import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { MusicPayload } from '../../model/musicpayload';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  protected serviceUrl: string = getBackendUrl() + 'music';

  public constructor(private http: HttpClient) {

  }

  find(): Observable<GenericResponse<MusicPayload>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<MusicPayload>> = this.http.get<GenericResponse<MusicPayload>>(url);
    return response;
  }
}
