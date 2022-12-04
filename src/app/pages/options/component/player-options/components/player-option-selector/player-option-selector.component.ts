import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

import { createPlayerOption, PlayerOption } from 'src/app/pages/options/service/PlayerOptionsLocalStorageService/model/PlayerOption';

@Component({
  selector: 'app-player-option-selector',
  templateUrl: './player-option-selector.component.html',
  styleUrls: ['./player-option-selector.component.scss']
})
export class PlayerOptionSelectorComponent implements OnInit {

  @Input()
  public playerTextboxLabel: string;

  @Output()
  public selected: EventEmitter<PlayerOption> = new EventEmitter();

  public playerName: string;

  public color: ThemePalette = 'primary';
  public touchUi = false;
  public colorCtr: AbstractControl = new FormControl(null);
  public disabled = false;

  public constructor() { }

  public ngOnInit(): void {
  }

  public submit(): void {
    const rgb: string = this.colorCtr.value?.rgba?.trim();
    const player: string = this.playerName?.trim();
    const playerOption: PlayerOption = createPlayerOption(player, rgb)
    this.selected.emit(playerOption);
  }

}
