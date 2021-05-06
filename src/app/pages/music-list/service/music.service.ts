import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  protected serviceUrl: string = getBackendUrl() + 'music';

    constructor(private http: HttpClient) {

  }

  find(): Observable<GenericResponse<Music[]>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<Music[]>> = this.http.get<GenericResponse<Music[]>>(url);
    return response;
  }
}

export interface Music {
    songName: string;
    duration: string;
}

