import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { capitalize } from 'src/app/util/util';
import { Notice } from '../notice/model/notice';

@Component({
  selector: 'app-meme-tournament-settings',
  templateUrl: './meme-tournament-settings.component.html',
  styleUrls: ['./meme-tournament-settings.component.scss']
})
export class MemeTournamentSettingsComponent implements OnInit, OnChanges {

  @Input()
  public notice: Notice;

  @Input()
  public memeTournamentSettings: string[];

  public constructor() { }

  public ngOnInit(): void {

  }

  public ngOnChanges(): void {

  }

  public isFightNotice(notice: Notice): boolean {
    return notice === Notice.FIGHT_NOTICE;
  }

  public formattedSettingsList(): string {
    if(!this.memeTournamentSettings || this.memeTournamentSettings.length === 0) {
      return "";
    }

    const formattedSettingsList = this.memeTournamentSettings.map(setting => capitalize(setting)).join(', ');
    return formattedSettingsList;
  }

}
