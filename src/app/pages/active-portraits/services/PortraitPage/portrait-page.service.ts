import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Injectable({
  providedIn: 'root'
})
export class PortraitPageService {

  public constructor(private http: HttpClient) { }

  public log(): Observable<GenericResponse<String>> {
    const url = getBackendUrl() + 'pages/portraits';
    const response: Observable<GenericResponse<String>> =
      this.http.get<GenericResponse<String>>(url);
    return response;
  }
}
