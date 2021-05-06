import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LiveService } from './service/liveservice';


@Component({
  selector: 'app-livepage',
  templateUrl: './livepage.component.html',
  styleUrls: ['./livepage.component.scss']
})
export class LivePageComponent implements OnInit {
	title = 'FFTBattlegroundUI';

	public constructor(public liveService: LiveService) {}

    public ngOnInit(): void {
		$('#twitch-hide-text').show();
		$('#twitch-show-text').hide();
		$('#fightGridContainer').hide();

		this.liveService.resetMatchBlock();
		this.liveService.pullCurrentData();
		this.liveService.connect();
  	}
}

