import { Component, OnInit } from '@angular/core';
import { FavoritePlayers, playerOptionArrayFromFavoritePlayers } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/model/FavoritePlayers';
import { PlayerOption } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/model/PlayerOption';
import { PlayerOptionsLocalStorageServiceService } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/player-options-local-storage-service.service';

@Component({
  selector: 'app-primary-favorite-player-list',
  templateUrl: './primary-favorite-player-list.component.html',
  styleUrls: ['./primary-favorite-player-list.component.scss']
})
export class PrimaryFavoritePlayerListComponent implements OnInit {

  public primaryPlayer: PlayerOption;
  public favoritePlayers: PlayerOption[];

  public constructor(private readonly playerOptionsLocalStorageServiceService: PlayerOptionsLocalStorageServiceService) {
    this.primaryPlayer = this.playerOptionsLocalStorageServiceService.getPrimaryPlayer();
    const favoritePlayerData: FavoritePlayers = this.playerOptionsLocalStorageServiceService.getFavoritePlayers();
    this.favoritePlayers = playerOptionArrayFromFavoritePlayers(favoritePlayerData);
  }

  ngOnInit(): void {
  }

}
