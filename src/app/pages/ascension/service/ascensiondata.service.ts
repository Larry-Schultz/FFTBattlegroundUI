import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { Allegiance } from 'src/app/model/playerRecord';

@Injectable({
  providedIn: 'root'
})
export class AscensionDataService {

  protected serviceUrl: string = getBackendUrl() + 'ascension';

  constructor(private http: HttpClient) {

  }

  find(): Observable<GenericResponse<AscensionData>> {
    const url = this.serviceUrl;
    const response: Observable<GenericResponse<AscensionData>> = this.http.get<GenericResponse<AscensionData>>(url);
    return response;
  }
}

export interface AscensionData {
    prestigeData: PrestigeEntry[];
    generationDateString: string;
}

export class PrestigeEntry {
    name: string;
    prestigeLevel: number;
    lastActive: string;
    allegiance: Allegiance;
}
