import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { LiveService } from './service/liveservice';


@Component({
  selector: 'app-livepage',
  templateUrl: './livepage.component.html',
  styleUrls: ['./livepage.component.scss']
})
export class LivePageComponent implements OnInit {
	public title = 'FFTBattlegroundUI';

  public searchEnabled;

	public constructor(public liveService: LiveService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchEnabled = params?.search === 'true';
    });
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

