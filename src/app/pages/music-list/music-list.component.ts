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
  firstOccurenceString = '';
  totalOccurences = 0;
  totalSongsWithOccurences = 0;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.find().subscribe(musicData => {
      this.displayTable = true;
      this.databaseOptions = {
        data: musicData.data.musicData,
        paging: true,
        pagingType: 'full_numbers',
        pageLength: 25,
        columns: [
            {title: 'Song Name', data: 'songName', type: 'string'},
            {title: 'Duration', data: 'duration', type: 'string'},
            {title: 'Occurences', data: 'occurences', type: 'number'},
            {title: 'Last Occurence', data: 'mostRecentOccurence', type: 'date'}
        ],
        columnDefs: [
          {
            render:  (data: number, type: any, row: any) => {
              if (!data || data === 0) {
                return '';
              } else if (row?.occurences === 0) {
                return '';
              }
              const date: Date = new Date(data);
              const result: string = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
              return result;
            },
            targets: [3]
          }
        ],
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, 'All'],
        ],
        select: true
      };

      this.songCount = musicData.data.musicData.length;
      const firstOccurenceDate: Date = new Date(musicData.data.firstOccurence);
      this.firstOccurenceString = firstOccurenceDate.toLocaleDateString() + ' ' + firstOccurenceDate.toLocaleTimeString();
      this.totalOccurences = musicData.data.totalOccurences;
      this.totalSongsWithOccurences = musicData.data.songWithOccurencesCount;
    });
  }

}
