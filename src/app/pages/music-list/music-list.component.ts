import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  totalSongsWithoutOccurences = 0;

  searchEnabled = false;

  constructor(private musicService: MusicService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchEnabled = params?.search === 'true';
    });
  }

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
            {title: 'Last Occurence', data: 'mostRecentOccurence', type: 'date'},
            {title: 'First Seen', data: 'dateAdded', type: 'date'},
            {title: 'Search', data: 'songName', type: 'html'}
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
          }, {
            render:  (data: number, type: any, row: any) => {
              if (!data || data === 0) {
                return '';
              }
              const date: Date = new Date(data);
              const result: string = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
              return result;
            },
            targets: [4]
          },
          {
            render: (data: number, type: any, row: any) => {
              return `<a href="https://www.youtube.com/results?search_query=${row?.songName}" target="_blank">Search</a>`;
            },
            visible: this.searchEnabled,
            targets: [5]
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
      this.totalOccurences = musicData.data.musicData.map((musicData) => musicData.occurences ? musicData.occurences : 0)
        .reduce((previous, current) => previous + current);
      this.totalSongsWithOccurences = musicData.data.musicData.filter((musicData) => musicData.occurences && musicData.occurences > 0)
      .length;
      this.totalSongsWithoutOccurences = musicData.data.musicData.filter((musicData) => !musicData.occurences || musicData.occurences === 0)
        ?.length;
    });
  }

}
