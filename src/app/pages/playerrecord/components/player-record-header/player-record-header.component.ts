import { Component, Input, OnInit } from '@angular/core';
import { PlayerData } from "../../model/PlayerData";

@Component({
  selector: 'app-player-record-header',
  templateUrl: './player-record-header.component.html',
  styleUrls: ['./player-record-header.component.scss']
})
export class PlayerRecordHeaderComponent implements OnInit {

  @Input()
  public playerData: PlayerData;

  public constructor() { }

  public ngOnInit(): void {
  }

}
