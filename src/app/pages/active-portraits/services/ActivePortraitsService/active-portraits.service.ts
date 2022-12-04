import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Injectable({
  providedIn: 'root'
})
export class ActivePortraitsService {

  private serviceUrl: string = getBackendUrl() + 'images/activePortraits';

  public constructor(private readonly http: HttpClient) {

  }

  public find(): Observable<GenericResponse<string[]>> {
    const response: Observable<GenericResponse<string[]>> = this.http.get<GenericResponse<string[]>>(this.serviceUrl);
    return response;
  }
}
