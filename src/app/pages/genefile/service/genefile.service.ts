import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneFileService {
  protected serviceUrl: string = getBackendUrl() + 'genefile/';

  constructor(private http: HttpClient) {}

  find(genefile: string): Observable<string> {
    const url = this.serviceUrl + genefile;
    const response: Observable<string> = this.http.get<string>(url);
    return response;
  }
}
