import { Component, OnInit } from '@angular/core';
import { LivePageOptionsLocalStorageService } from 'src/app/pages/options/service/LivePageOptionsLocalStorageService/live-page-options-local-storage.service';

@Component({
  selector: 'app-twitchembed',
  templateUrl: './twitchembed.component.html',
  styleUrls: ['./twitchembed.component.scss']
})
export class TwitchembedComponent implements OnInit {

  public twitchEnabled = true;

  public constructor(private readonly livePageOptionsLocalStorageService: LivePageOptionsLocalStorageService) {
    this.twitchEnabled = this.livePageOptionsLocalStorageService.isShowTwitchEmbed();
  }

  public ngOnInit() {

  }

  public toggleTwitchStream(): void {
    this.twitchEnabled = !this.twitchEnabled;
    this.livePageOptionsLocalStorageService.setShowTwitchEmbed(this.twitchEnabled);
  }


}
