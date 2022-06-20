import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Allegiance } from 'src/app/model/playerRecord';
import { getColor } from 'src/app/util/colorsetter';
import { FightEntry } from '../fightentry/model/fightentry';
import { TournamentWinData } from '../../model/tournamentwindata';
import { Notice } from './model/notice';

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

  @Input()
  public tournamentWinMap: Map<Allegiance, TournamentWinData>;

  @Input()
  public eventTime: number;

  public fightEntryCount: number;

  public constructor() { }

  public ngOnInit() {
    this.notice = Notice.LOADING_NOTICE;
    this.fightEntryCount = 0;
  }

  public ngOnChanges() {

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