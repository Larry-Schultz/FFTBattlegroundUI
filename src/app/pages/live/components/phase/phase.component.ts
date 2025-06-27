import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FightEntry } from '../fightentry/model/fightentry';
import { Notice } from './model/notice';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit, OnChanges {

  @Input()
  public notice: Notice;

  @Input()
  public fightEntries: FightEntry[]

  @Input()
  public eventTime: number;

  public constructor() { }

  public ngOnInit(): void {
    this.notice = Notice.LOADING_NOTICE;
  }

  public ngOnChanges(changes: SimpleChanges): void {

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

}
