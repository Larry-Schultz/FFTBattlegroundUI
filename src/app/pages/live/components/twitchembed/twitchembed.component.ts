import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {TwitchEmbed, TwitchEmbedLayout, TwitchEmbedTheme} from 'twitch-player';

@Component({
  selector: 'app-twitchembed',
  templateUrl: './twitchembed.component.html',
  styleUrls: ['./twitchembed.component.scss']
})
export class TwitchembedComponent implements OnInit {

  private twitchHeight = 378;
  private twitchEnabled = true;
	private twitchEmbed = null;

  public constructor() { }

  public ngOnInit() {
    this.createTwitchEmbed();
  }

  public createTwitchEmbed(): TwitchEmbed {
    const twitchEmbed = new TwitchEmbed('twitch-embed', {
      width: 620,
      height: this.twitchHeight,
      channel: 'fftbattleground',
      layout: TwitchEmbedLayout.VIDEO,
      theme: TwitchEmbedTheme.DARK,
      // only needed if your site is also embedded on embed.example.com and othersite.example.com
      parent: ['fftbview.com']
      });

    return twitchEmbed;
  }

  public toggleTwitchStream(): void {
    if (this.twitchEnabled) {
      $('#twitch-embed').hide();
      $('#twitch-hide-text').hide();
      $('#twitch-show-text').show();
      this.twitchEmbed.getPlayer().pause();
      this.twitchEnabled = false;
    } else {
      // then show elements
      $('#twitch-embed').show();
      $('#twitch-hide-text').show();
      $('#twitch-show-text').hide();
      this.twitchEmbed.getPlayer().play();
      this.twitchEnabled = true;
    }
  }

}
