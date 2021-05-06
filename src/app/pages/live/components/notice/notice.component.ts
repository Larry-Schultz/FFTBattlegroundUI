import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FightEntry } from '../fightentry/fightentry.component';
import { Allegiance } from 'src/app/model/playerRecord';
import { capitalize } from 'src/app/util/util';
import { getColor } from 'src/app/util/colorsetter';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit, OnChanges {

  @Input()
  public notice: Notice;

  @Input()
  public team1: Allegiance;

  @Input()
  public team2: Allegiance;

  @Input()
  public fightEntries: FightEntry[]

  public fightEntryCount: number;

  public constructor() { }

  public ngOnInit() {
    this.notice = Notice.LOADING_NOTICE;
    this.fightEntryCount = 0;
  }

  public ngOnChanges() {
    if (this.fightEntries && this.fightEntries.length > 0) {
      this.fightEntryCount = this.fightEntries.length;
    } else {
      this.fightEntryCount = 0;
    }

  }

  public isLoadingNotice(notice: Notice): boolean {
    return notice === Notice.LOADING_NOTICE;
  }

  public isFightNotice(notice: Notice): boolean {
    return notice === Notice.FIGHT_NOTICE;
  }

  public isMatchNotice(notice: Notice): boolean {
    return notice === Notice.MATCH_NOTICE;
  }

  public isBettingNotice(notice: Notice): boolean {
    return notice === Notice.BETTING_NOTICE;
  }

  public isResultsNotice(notice: Notice): boolean {
    return notice === Notice.RESULTS_NOTICE;
  }

  public getTeamColor(team: Allegiance) {
    const color = getColor(team);
    return color;
  }

}

export enum Notice {
  LOADING_NOTICE = 'LOADING_NOTICE',
  MATCH_NOTICE = 'MATCH_NOTICE',
  FIGHT_NOTICE = 'FIGHT_NOTICE',
  BETTING_NOTICE = 'BETTING_NOTICE',
  RESULTS_NOTICE = 'RESULTS_NOTICE'
}