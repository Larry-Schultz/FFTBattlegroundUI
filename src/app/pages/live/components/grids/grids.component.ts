import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { BetEntry } from '../betentry/model/betentry';
import { FightEntry } from '../fightentry/model/fightentry';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.scss']
})
export class GridsComponent implements OnInit, OnChanges {

  @Input('team1')
  public team1: Allegiance;

  @Input('team2')
  public team2: Allegiance

  @Input('team1BetEntries')
  public team1BetEntries: BetEntry[];

  @Input('team2BetEntries')
  public team2BetEntries: BetEntry[];

  @Input('fightEntries')
  public fightEntries: FightEntry[];

  @Input('gridMode')
  public gridMode: GridMode;

  private itemContainer: any;
  private scrollContainer: any;
  private items = [];
  private isNearBottom = true;

  public constructor() { }

  public ngOnInit() {
    this.gridMode = GridMode.BET;
  }

  public ngOnChanges() {

  }

  public isBetMode(): boolean {
    return this.gridMode === GridMode.BET;
  }

  public isFightMode(): boolean {
    return this.gridMode === GridMode.FIGHT;
  }

    private onItemElementsChanged(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  private isUserNearBottom(): boolean {
    const threshold = 150;
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - threshold;
  }

  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
  }


}

export enum GridMode {
  BET = 'BET',
  FIGHT = 'FIGHT'
}
