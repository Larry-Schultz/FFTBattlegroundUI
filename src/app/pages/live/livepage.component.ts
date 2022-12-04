import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MusicOptionsLocalStorageServiceService } from '../options/service/MusicOptionsLocalStorageService/music-options-local-storage-service.service';
import { LiveService } from './service/liveservice';


@Component({
  selector: 'app-livepage',
  templateUrl: './livepage.component.html',
  styleUrls: ['./livepage.component.scss']
})
export class LivePageComponent implements OnInit {
	public title = 'FFTBattlegroundUI';

  public searchEnabled;

	public constructor(public liveService: LiveService, private readonly musicOptionService: MusicOptionsLocalStorageServiceService) {
    this.searchEnabled = this.musicOptionService.isSearch();
  }

    public ngOnInit(): void {
		$('#twitch-hide-text').show();
		$('#twitch-show-text').hide();
		$('#fightGridContainer').hide();

		this.liveService.resetMatchBlock();
		this.liveService.pullCurrentData();
		this.liveService.connect();
  	}
}

