import { Component, OnInit, Input, TrackByFunction, OnChanges } from '@angular/core';

import { Allegiance, PlayerRecord } from 'src/app/model/playerRecord';
import { convertToInt, getFixedDecimal, stringToInt } from '../../../../util/util';

import { BetEvent, BetInfoEvent } from 'src/app/pages/live/model/betevents';
import { BetType } from '../../model/battlegroundevent';

@Component({
  selector: 'app-betentry',
  templateUrl: './betentry.component.html',
  styleUrls: ['./betentry.component.scss']
})
export class BetentryComponent implements OnInit, OnChanges {

  @Input()
  public betEntry: BetEntry;

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {}

  public isSpecial(): boolean {
    return this.betEntry && this.betEntry.betType !== BetType.VALUE;
  }
}

export class BetEntryFactory {
  static betEntryFromBetEvent(event: BetEvent): BetEntry {
    const betEntry = new BetEntry(event.player, event.betAmount, event.team, event.metadata);
    betEntry.betType = event.betType;
    betEntry.betText = event.betText;
    return betEntry;
  }

  static betEntryFromBetInfoEvent(event: BetInfoEvent): BetEntry {
    const betEntry = new BetEntry(event.player, event.betAmount.toString(), event.team, event.metadata);
    betEntry.betType = BetType.VALUE
    betEntry.betText = event.betAmount.toString();
    return betEntry;
  }
}

export class BetEntry {
  player: string;
  betAmount: string;
  team: Allegiance;
  betType: BetType;
  betText: string;

  metadata: PlayerRecord;

  constructor(player: string, betAmount: string, team: Allegiance, metadata: PlayerRecord) {
    this.player = player;
    this.betAmount = betAmount;
    this.team = team;
    this.metadata = metadata;
  }

  public static trackByPlayer: TrackByFunction<BetEntry> = (index: number, betEntry: any): string => {
    return betEntry.player;
  }

  public static trackByBetAmount: TrackByFunction<BetEntry> = (index: number, betEntry: any): string => {
    return betEntry.betAmount;
  }

  // 1 < 2 (-1), 1 == 2 (0), 1 > 2 (1)
  public static compare(entry1: BetEntry, entry2: BetEntry): number {
    const entry1BetAmount: number = stringToInt(entry1.betAmount);
    const entry2BetAmount: number = stringToInt(entry2.betAmount);

    let result = 0;
    if (entry1BetAmount < entry2BetAmount) {
      result = 1;
    } else if (entry1BetAmount > entry2BetAmount) {
      result = -1;
    } else {
      result = entry1.player.localeCompare(entry2.player); // performs compare on strings lexographically
    }

    return result;
  }

  public replaceData(otherBetEntry: BetEntry) {
    this.player = otherBetEntry.player;
    this.betAmount = otherBetEntry.betAmount;
    this.team = otherBetEntry.team;
  }

  public titleString(): string {
    let playerTooltip = '';
    if (this.metadata != null) {
      const wins: number = (this.metadata.wins != null && this.metadata.wins > 0 ? this.metadata.wins : 1);
      const losses: number = (this.metadata.losses != null && this.metadata.losses > 0 ? this.metadata.losses : 1);
      const ratioString = this.generateRatioString(wins, losses);
      playerTooltip = 'Betting: Wins: ' + wins.toLocaleString() + ' Losses: ' + losses.toLocaleString() + ' Ratio: ' + ratioString + '%';
    }

    return playerTooltip;
  }

  protected generateRatioString(wins: number, losses: number): string {
    let playerWinLossRatio: number = wins / (wins + losses);
    playerWinLossRatio = getFixedDecimal(playerWinLossRatio * 100, 0);
    const ratioString = playerWinLossRatio.toString();
    return ratioString;
  }

}
