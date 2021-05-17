import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitchembed',
  templateUrl: './twitchembed.component.html',
  styleUrls: ['./twitchembed.component.scss']
})
export class TwitchembedComponent implements OnInit {

  public twitchEnabled = true;

  public constructor() { }

  public ngOnInit() {

  }

  public toggleTwitchStream(): void {
    this.twitchEnabled = !this.twitchEnabled;
  }


}
