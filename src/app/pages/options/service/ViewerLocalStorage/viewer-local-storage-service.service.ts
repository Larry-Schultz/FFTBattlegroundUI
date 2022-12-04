import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable({
  providedIn: 'root'
})
export class ViewerLocalStorageServiceService {

  constructor(private readonly localstorageService: LocalStorageService) { }

  public get<T>(name: string): T {
    const result: T = this.localstorageService.get(name);
    return result;
  }

  public set<T>(name: string, object: T) {
    this.localstorageService.set(name, object);
  }

}
