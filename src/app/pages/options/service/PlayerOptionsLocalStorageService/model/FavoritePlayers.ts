import { PlayerOption } from "./PlayerOption";

export interface FavoritePlayers {
  favoritePlayers: Map<string, PlayerOption>;
}

export interface FavoritePlayerStorage {
  favoritePlayers: PlayerOption[];
}

export function createFavoritePlayers(playerOptions: PlayerOption[]) {
  const favoritePlayers: FavoritePlayers = {
    favoritePlayers: new Map<string, PlayerOption>()
  };

  if(playerOptions && playerOptions.length > 0) {
    for(const playerOption of playerOptions) {
      favoritePlayers.favoritePlayers.set(playerOption.player, playerOption);
    }
  }

  return favoritePlayers;
}

export function createStorageObjectForFavoritePlayer(favoritePlayers: FavoritePlayers): FavoritePlayerStorage {
  const favoritePlayerStorage: FavoritePlayerStorage = {
    favoritePlayers: Array.from(favoritePlayers.favoritePlayers?.values())
  }

  return favoritePlayerStorage;
}

export function createFavoritePlayersFromStorageObject(favoritePlayerStorage: FavoritePlayerStorage): FavoritePlayers {
  const favoritePlayers: FavoritePlayers = createFavoritePlayers(favoritePlayerStorage.favoritePlayers);
  return favoritePlayers;
}

export function playerOptionArrayFromFavoritePlayers(favoritePlayers: FavoritePlayers): PlayerOption[] {
  let array: PlayerOption[] = [];
  if(favoritePlayers.favoritePlayers && favoritePlayers.favoritePlayers.size > 0) {
    array= Array.from(favoritePlayers?.favoritePlayers.values());
  }
  return array;
}
