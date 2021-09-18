import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Injectable({
  providedIn: 'root'
})
export class StacktraceService {

    protected serviceUrl: string = getBackendUrl() + 'error/stacktrace/';

  constructor(private http: HttpClient) {
  }

  find(id: number): Observable<GenericResponse<string>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<string>> = this.http.get<GenericResponse<string>>(url + id.toString());
    return response;
  }
}
