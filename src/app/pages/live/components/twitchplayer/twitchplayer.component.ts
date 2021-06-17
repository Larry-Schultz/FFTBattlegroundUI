import { Component, OnInit, OnChanges } from '@angular/core';
import {TwitchEmbed, TwitchEmbedLayout, TwitchEmbedTheme, TwitchPlayer} from 'twitch-player';

@Component({
  selector: 'app-twitchplayer',
  templateUrl: './twitchplayer.component.html',
  styleUrls: ['./twitchplayer.component.scss']
})
export class TwitchPlayerComponent implements OnInit, OnChanges {

  private twitchHeight = 378;
	private twitchEmbed = null;

  public constructor() { }

  public ngOnInit() {
    this.twitchEmbed = this.createTwitchEmbed();
  }

  public ngOnChanges() {

  }

  public createTwitchEmbed(): TwitchEmbed {
    const twitchEmbed: TwitchEmbed = new TwitchEmbed('twitch-embed', {
      width: 620,
      height: this.twitchHeight,
      channel: 'fftbattleground',
      layout: TwitchEmbedLayout.VIDEO,
      theme: TwitchEmbedTheme.DARK,
      // only needed if your site is also embedded on embed.example.com and othersite.example.com
      parent: ['fftbview.com']
      });
      twitchEmbed

      const twitchPlayer: TwitchPlayer = twitchEmbed.getPlayer();
      twitchPlayer.setMuted(true);

    return twitchEmbed;
  }
}
