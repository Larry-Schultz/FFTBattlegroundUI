import { Component, Input, OnInit } from '@angular/core';
import { MyChartData } from 'src/app/fragments/mychartcomponent/model/MyChartData';
import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';
import { PlaylistSongCountService } from '../../service/PlaylistSongCountService/playlist-song-count.service';
import { PlaylistSongOccurenceCountService } from '../../service/PlaylistSongOccurenceCountService/playlist-song-occurence-count.service';

@Component({
  selector: 'app-playlist-song-count-graph',
  templateUrl: './playlist-song-count-graph.component.html',
  styleUrls: ['./playlist-song-count-graph.component.scss']
})
export class PlaylistSongCountGraphComponent implements OnInit {

  @Input()
  public showCharts: boolean;

  public playlistSongCountChartData: MyChartData;
  public playlistSongOccurenceCountChartData: MyChartData;

  constructor(private readonly playlistSongCountService: PlaylistSongCountService,
    private readonly playlistSongOccurenceCountService: PlaylistSongOccurenceCountService,
    private readonly playerBalanceHistoryService: PlayerBalanceHistoryService) { }

  public ngOnInit(): void {
    this.playlistSongCountService.find().subscribe(genericResponse => {
      const title = 'Playlist Song Count'
      this.playlistSongCountChartData = this.playerBalanceHistoryService.generateMyChartData(genericResponse.data, title);
    });
    this.playlistSongOccurenceCountService.find().subscribe(genericResponse => {
      const title = 'Playlist Song Occurence Count';
      this.playlistSongOccurenceCountChartData = this.playerBalanceHistoryService.generateMyChartData(genericResponse.data, title);
    });
  }

}
