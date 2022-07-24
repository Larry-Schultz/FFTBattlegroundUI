import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { MusicEvent } from '../../model/MatchEvents/musicevent';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit, OnChanges {

  @Input()
  public musicEvent: MusicEvent;

  @ViewChild('cd', { static: false })
  private countdown: CountdownComponent;

  public songName: string;
  public countdownConfig: CountdownConfig;

  constructor() { }

  public ngOnInit() {
    this.songName = null;
    this.countdownConfig = this.countdownConfigFactory(0);
  }

  public ngOnChanges() {
    if (this.musicEvent) {
      if (this.songName !== this.musicEvent.songName) {
        this.songName = this.musicEvent.songName;
        this.countdownConfig = this.countdownConfigFactory(this.musicEvent.durationInSeconds);
      }
    }
  }

  public countdownConfigFactory(leftTime: number): CountdownConfig {
    return { format: `mm:ss`, leftTime };
  }

}
