import { Injectable } from '@angular/core';
import { ViewerLocalStorageServiceService } from '../ViewerLocalStorage/viewer-local-storage-service.service';
import { createFavoritePlayers, createFavoritePlayersFromStorageObject, createStorageObjectForFavoritePlayer, FavoritePlayers, FavoritePlayerStorage } from './model/FavoritePlayers';
import { PlayerOption } from './model/PlayerOption';

@Injectable({
  providedIn: 'root'
})
export class PlayerOptionsLocalStorageServiceService {
  private static PRIMARY_PLAYER_OPTION = 'primary_player';
  private static FAVORITE_PLAYER_OPTION = 'favorite_players';

  public primaryPlayer: PlayerOption;
  public favoritePlayers: FavoritePlayers;

  constructor(private readonly viewerLocalStorageService: ViewerLocalStorageServiceService) {
    this.primaryPlayer = this.viewerLocalStorageService.get<PlayerOption>(PlayerOptionsLocalStorageServiceService.PRIMARY_PLAYER_OPTION);
    const favoritePlayerStorage: FavoritePlayerStorage = this.viewerLocalStorageService.get<FavoritePlayerStorage>(PlayerOptionsLocalStorageServiceService.FAVORITE_PLAYER_OPTION);
    if(favoritePlayerStorage === null) {
      this.favoritePlayers = createFavoritePlayers([]);
    } else {
      this.favoritePlayers = createFavoritePlayersFromStorageObject(favoritePlayerStorage);
    }
  }

  public getPrimaryPlayer(): PlayerOption {
    const primaryPlayer: PlayerOption = this.primaryPlayer;
    return primaryPlayer;
  }

  public setPrimaryPlayer(primaryPlayer: PlayerOption): void {
    this.primaryPlayer = primaryPlayer;
    this.viewerLocalStorageService.set<PlayerOption>(PlayerOptionsLocalStorageServiceService.PRIMARY_PLAYER_OPTION, primaryPlayer);
  }

  public getFavoritePlayers(): FavoritePlayers {
    const favoritePlayers = this.favoritePlayers;
    return favoritePlayers;
  }

  public addFavoritePlayer(newFavoritePlayer: PlayerOption): void {
    if(this.favoritePlayers.favoritePlayers && this.favoritePlayers.favoritePlayers.keys) {
      this.favoritePlayers.favoritePlayers.set(newFavoritePlayer.player, newFavoritePlayer);
    } else {
      const newMap: Map<string, PlayerOption> = new Map<string, PlayerOption>();
      newMap.set(newFavoritePlayer.player, newFavoritePlayer);
      this.favoritePlayers.favoritePlayers = newMap;
    }
    const favoritePlayerStorage: FavoritePlayerStorage = createStorageObjectForFavoritePlayer(this.favoritePlayers);
    this.viewerLocalStorageService.set<FavoritePlayerStorage>(PlayerOptionsLocalStorageServiceService.FAVORITE_PLAYER_OPTION, favoritePlayerStorage);
  }

  public removeFavoritePlayer(removedFavoritePlayer: string): void {
    this.favoritePlayers.favoritePlayers.delete(removedFavoritePlayer);
    this.viewerLocalStorageService.set<FavoritePlayers>(PlayerOptionsLocalStorageServiceService.FAVORITE_PLAYER_OPTION, this.favoritePlayers);
  }
}
