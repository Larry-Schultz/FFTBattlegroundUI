import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { LivePageOptionsLocalStorageService } from '../../service/LivePageOptionsLocalStorageService/live-page-options-local-storage.service';

@Component({
  selector: 'app-live-page-options',
  templateUrl: './live-page-options.component.html',
  styleUrls: ['./live-page-options.component.scss']
})
export class LivePageOptionsComponent implements OnInit {

  public showTwitchEmbed = false;
  public showTournamentTracker = false;

  public constructor(private readonly livePageOptionsLocalStorageService: LivePageOptionsLocalStorageService) {
    this.showTwitchEmbed = this.livePageOptionsLocalStorageService.isShowTwitchEmbed();
    this.showTournamentTracker = this.livePageOptionsLocalStorageService.isShowTournamentTracker();
  }

  public ngOnInit(): void {
  }

  public changeShowTwitchEmbedOption(matSlideToggleChange: MatSlideToggleChange): void {
    this.showTwitchEmbed = matSlideToggleChange.checked;
    this.livePageOptionsLocalStorageService.setShowTwitchEmbed(matSlideToggleChange.checked);
  }

}
