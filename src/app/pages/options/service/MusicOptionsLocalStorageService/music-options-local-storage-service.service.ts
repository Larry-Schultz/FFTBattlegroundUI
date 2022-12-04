import { Injectable } from '@angular/core';
import { ViewerLocalStorageServiceService } from '../ViewerLocalStorage/viewer-local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class MusicOptionsLocalStorageServiceService {
  private static SEARCH_OPTION_NAME = 'music_search';
  private static SEARCH_OPTION_DEFAULT = false;

  public  constructor(private readonly viewerLocalStorageService: ViewerLocalStorageServiceService) { }

  public isSearch(): boolean {
    let isSearch: boolean = this.viewerLocalStorageService.get<boolean>(MusicOptionsLocalStorageServiceService.SEARCH_OPTION_NAME);
    if(isSearch == null) {
      isSearch = MusicOptionsLocalStorageServiceService.SEARCH_OPTION_DEFAULT;
    }
    return isSearch;
  }

  public setSearch(search: boolean): void {
    this.viewerLocalStorageService.set<boolean>(MusicOptionsLocalStorageServiceService.SEARCH_OPTION_NAME, search);
  }
}
