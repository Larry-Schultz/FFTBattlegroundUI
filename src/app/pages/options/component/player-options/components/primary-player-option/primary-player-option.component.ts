import { Component, OnInit, OnChanges, AfterViewInit, ViewChildren, QueryList, SimpleChanges } from '@angular/core';

import { FavoritePlayerStarComponent } from 'src/app/fragments/favorite-player-star/favorite-player-star.component';
import { PlayerOption } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/model/PlayerOption';
import { PlayerOptionsLocalStorageServiceService } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/player-options-local-storage-service.service';

@Component({
  selector: 'app-primary-player-option',
  templateUrl: './primary-player-option.component.html',
  styleUrls: ['./primary-player-option.component.scss']
})
export class PrimaryPlayerOptionComponent implements OnInit, OnChanges, AfterViewInit {

  public currentPrimaryPlayer: PlayerOption;

  public constructor(private readonly playerOptionsLocalStorageService: PlayerOptionsLocalStorageServiceService) {
    this.currentPrimaryPlayer = this.playerOptionsLocalStorageService.getPrimaryPlayer();
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {

  }

  public ngAfterViewInit(): void {

  }

  public newPrimaryPlayerSelected(playerOption: PlayerOption): void {
    this.currentPrimaryPlayer = playerOption;
    this.playerOptionsLocalStorageService.setPrimaryPlayer(playerOption);
  }

}
