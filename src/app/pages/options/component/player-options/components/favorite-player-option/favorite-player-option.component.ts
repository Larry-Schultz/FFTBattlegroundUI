import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { FavoritePlayers, playerOptionArrayFromFavoritePlayers } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/model/FavoritePlayers';
import { PlayerOption } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/model/PlayerOption';
import { PlayerOptionsLocalStorageServiceService } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/player-options-local-storage-service.service';

@Component({
  selector: 'app-favorite-player-option',
  templateUrl: './favorite-player-option.component.html',
  styleUrls: ['./favorite-player-option.component.scss']
})
export class FavoritePlayerOptionComponent implements OnInit, OnChanges {

  public times: IconDefinition = faTimes;

  public favoritePlayersArray: PlayerOption[];

  public constructor(private readonly playerOptionsLocalStorageService: PlayerOptionsLocalStorageServiceService) { }

  public ngOnInit(): void {
    const favoritePlayer: FavoritePlayers = this.playerOptionsLocalStorageService.getFavoritePlayers();
    this.favoritePlayersArray = playerOptionArrayFromFavoritePlayers(favoritePlayer);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const favoritePlayer: FavoritePlayers = this.playerOptionsLocalStorageService.getFavoritePlayers();
    this.favoritePlayersArray = playerOptionArrayFromFavoritePlayers(favoritePlayer);
  }

  public newFavoritePlayerSubmitted(playerOption: PlayerOption): void {
    this.playerOptionsLocalStorageService.addFavoritePlayer(playerOption);
    const favoritePlayer: FavoritePlayers = this.playerOptionsLocalStorageService.getFavoritePlayers();
    this.favoritePlayersArray = playerOptionArrayFromFavoritePlayers(favoritePlayer);
  }

  public removeFavoritePlayer(player: string): void {
    this.playerOptionsLocalStorageService.removeFavoritePlayer(player);
    const favoritePlayer: FavoritePlayers = this.playerOptionsLocalStorageService.getFavoritePlayers();
    this.favoritePlayersArray = playerOptionArrayFromFavoritePlayers(favoritePlayer);
  }

}
