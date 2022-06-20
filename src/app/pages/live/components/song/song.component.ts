import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MusicEvent } from '../../model/MatchEvents/musicevent';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit, OnChanges {

  @Input()
  public musicEvent: MusicEvent;

  public songName: string;

  constructor() { }

  public ngOnInit() {
    this.songName = null;
  }

  public ngOnChanges() {
    if(this.musicEvent) {
      this.songName = this.musicEvent.songName;
    }
  }

}
