import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
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

  @Input()
  public memeTournamentSettings: string[];

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {

  }

  public getTeamColor(team: Allegiance) {
    const color = getColor(team);
    return color;
  }

}
