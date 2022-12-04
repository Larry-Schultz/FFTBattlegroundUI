import { Injectable } from '@angular/core';

import { ViewerLocalStorageServiceService } from '../ViewerLocalStorage/viewer-local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class LivePageOptionsLocalStorageService {
  private static SHOW_TWITCH_EMBED_OPTION = 'show_twitch_embed';
  private static SHOW_TWITCH_EMBED_OPTION_DEFAULT = true;

  private static SHOW_TOURNAMENT_TRACKER = 'show_tournament_tracker';
  private static SHOW_TOURNAMENT_TRACKER_DEFAULT = true;

  public constructor(private readonly viewerLocalStorageService: ViewerLocalStorageServiceService) { }

  public isShowTwitchEmbed(): boolean {
    let isShowTwitchEmbed: boolean = this.viewerLocalStorageService.get<boolean>(LivePageOptionsLocalStorageService.SHOW_TWITCH_EMBED_OPTION);
    if(isShowTwitchEmbed === null) {
      isShowTwitchEmbed = LivePageOptionsLocalStorageService.SHOW_TWITCH_EMBED_OPTION_DEFAULT;
    }

    return isShowTwitchEmbed;
  }

  public setShowTwitchEmbed(isShowTwitchEmbed: boolean): void {
    this.viewerLocalStorageService.set<boolean>(LivePageOptionsLocalStorageService.SHOW_TWITCH_EMBED_OPTION, isShowTwitchEmbed);
  }

  public isShowTournamentTracker(): boolean {
    let isShowTournamentTracker: boolean = this.viewerLocalStorageService.get<boolean>(LivePageOptionsLocalStorageService.SHOW_TOURNAMENT_TRACKER);
    if(isShowTournamentTracker === null) {
      isShowTournamentTracker = LivePageOptionsLocalStorageService.SHOW_TOURNAMENT_TRACKER_DEFAULT;
    }

    return isShowTournamentTracker;
  }

  public setShowTournamentTracker(isShowTournamentTracker: boolean): void {
    this.viewerLocalStorageService.set<boolean>(LivePageOptionsLocalStorageService.SHOW_TOURNAMENT_TRACKER, isShowTournamentTracker);
  }

}
