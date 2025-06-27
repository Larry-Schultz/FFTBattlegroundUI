import { Component, OnInit, Input, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { MusicEvent } from '../../model/MusicEvents/musicevent';
import { GaugeSetting } from './model/GaugeSetting';
import { countdownConfigFactory } from './../../util/CountdownUtils';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  public musicEvent: MusicEvent;

  @Input()
  public hypeEmotes: string[];

  @Input()
  public searchEnabled: boolean;

  @ViewChild('cd', { static: false })
  private countdown: CountdownComponent;

  public songName: string;
  public duration: number;
  public countdownConfig: CountdownConfig;

  public magnifyingGlass = faMagnifyingGlass;

  private gaugeSettings: GaugeSetting[];

  constructor() {


    this.gaugeSettings = [
      new GaugeSetting(0, 5, 'blue'),
      new GaugeSetting(5, 10, 'green'),
      new GaugeSetting(10, 15, 'yellow'),
      new GaugeSetting(15, 20, 'red')
    ];
  }

  public ngOnInit() {
    this.songName = null;
    this.hypeEmotes = new Array<string>();
    this.countdownConfig = countdownConfigFactory(0);

  }

  public ngAfterViewInit(): void {
    this.countdown.begin();
    this.setHypeGuageColorBasedOnCount(0);
  }

  public ngOnChanges() {
    if (this.musicEvent) {
      if (this.songName !== this.musicEvent.songName) {
        this.songName = this.musicEvent.songName;

      }
      if (this.songName !== this.musicEvent.songName || this.duration !== this.musicEvent.durationInSeconds) {
        this.duration = this.musicEvent.durationInSeconds;
        this.countdownConfig = countdownConfigFactory(this.duration);
        this.countdown.begin();
      }
    }

    if (this.hypeEmotes) {
      this.setHypeGuageColorBasedOnCount(this.hypeEmotes?.length);
    }
  }

  public hypeTitle(): string {
    let hypeTitle: string = 'hype emotes: ' + this.hypeEmotes.map(hype => hype.toLocaleString()).join(' ');
    return hypeTitle;
  }



  private setHypeGuageColorBasedOnCount(count: number): void {
    let color: string = 'blue';
    for (let i = 0; i < this.gaugeSettings.length; i++) {
      const currentGaugeSetting: GaugeSetting = this.gaugeSettings[i];
      if (count >= currentGaugeSetting.startRange && count < currentGaugeSetting.endRange) {
        color = currentGaugeSetting.color;
        break;
      }
    }

    this.setHypeGuageColor(color);
  }

  private setHypeGuageColor(color: string) {
    let pathElements = document.getElementsByClassName("value");
    (pathElements[0] as HTMLElement).style.stroke = color;

    pathElements = document.getElementsByClassName('value-text');
    (pathElements[0] as HTMLElement).style.stroke = color;
  }

}
