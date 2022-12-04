import { Component, OnInit, OnChanges, SimpleChanges, Input, ChangeDetectorRef  } from '@angular/core';
import { faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { FavoritePlayers } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/model/FavoritePlayers';
import { PlayerOption } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/model/PlayerOption';
import { PlayerOptionsLocalStorageServiceService } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/player-options-local-storage-service.service';

@Component({
  selector: 'app-favorite-player-star',
  templateUrl: './favorite-player-star.component.html',
  styleUrls: ['./favorite-player-star.component.scss']
})
export class FavoritePlayerStarComponent implements OnInit, OnChanges {

  @Input()
  public player: string;

  public star: IconDefinition = faStar;

  @Input()
  public relevantPlayerOptions: PlayerOption = null;

  public constructor(private readonly playerOptionsLocalStorageServiceService: PlayerOptionsLocalStorageServiceService,
    private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    if(this.player) {
      this.relevantPlayerOptions = this.pullPlayerOptions(this.player);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if(this.player) {
      this.relevantPlayerOptions = this.pullPlayerOptions(this.player);
    }
  }

  private pullPlayerOptions(player: string): PlayerOption {
    let playerOption: PlayerOption = this.getIfPrimaryPlayer(player);
    if(playerOption) {
      return playerOption;
    }

    playerOption = this.getIfFavoritePlayer(player);
    return playerOption;
  }

  private getIfPrimaryPlayer(player: string): PlayerOption {
    const primaryPlayerOptions: PlayerOption = this.playerOptionsLocalStorageServiceService.getPrimaryPlayer();
    if(primaryPlayerOptions && primaryPlayerOptions.player === player) {
      return primaryPlayerOptions;
    } else {
      return null;
    }
  }

  private getIfFavoritePlayer(player: string) {
    const favoritePlayers: FavoritePlayers = this.playerOptionsLocalStorageServiceService.getFavoritePlayers();
    if(favoritePlayers.favoritePlayers.has(player)) {
      const playerOption: PlayerOption = favoritePlayers.favoritePlayers.get(player);
      return playerOption;
    } else {
      return null;
    }
  }

}
