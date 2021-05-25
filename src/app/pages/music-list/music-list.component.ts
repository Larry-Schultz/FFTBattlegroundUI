import { Component, OnInit } from '@angular/core';

import { MusicService } from './service/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  databaseOptions: any = null;
  displayTable = false;
  songCount = 0;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.find().subscribe(musicData => {
      this.displayTable = true;
      this.databaseOptions = {
        data: musicData.data,
        paging: false,
        columns: [
            {title: 'Song Name', data: 'songName'},
            {title: 'Duration', data: 'duration'},
        ],
        select: true
      };
      this.songCount = musicData.data.length;
    });
  }

}
