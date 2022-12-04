import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { DumpActiveMap } from '../../model/DumpActiveMap';

@Injectable({
  providedIn: 'root'
})
export class ActiveMapsService {

  private serviceUrl: string = getBackendUrl() + 'images/activeMaps';

  public constructor(private readonly http: HttpClient) {

  }

  public find(): Observable<GenericResponse<DumpActiveMap[]>> {
    const response: Observable<GenericResponse<DumpActiveMap[]>> = this.http.get<GenericResponse<DumpActiveMap[]>>(this.serviceUrl);
    return response;
  }
}
