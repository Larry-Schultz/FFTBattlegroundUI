import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'

import { GenericResponse } from 'src/app/util/genericresponse';
import { intToString, generateOrdinal, capitalize } from 'src/app/util/util';
import { getColor } from 'src/app/util/colorsetter';

import {
  AllegianceLeaderboardDataService,
  AllegianceLeaderboard,
  AllegianceLeaderboardWrapper,
  AllegianceLeaderboardEntry} from './service/allegianceleaderboarddata.service';
import { getBackendUrl } from 'src/app/util/getbackendurl';


@Component({
  selector: 'app-allegianceleaderboard',
  templateUrl: './allegianceleaderboard.component.html',
  styleUrls: ['./allegianceleaderboard.component.scss']
})
export class AllegianceLeaderboardComponent implements OnInit {

  allegianceLeaderboard: AllegianceLeaderboard[];
  generationDate: Date;

  constructor(private allegianceLeaderboardDataService: AllegianceLeaderboardDataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.allegianceLeaderboardDataService.find().subscribe((genericResponse: GenericResponse<AllegianceLeaderboardWrapper>): void => {
      this.allegianceLeaderboard = genericResponse.data.leaderboards;
      this.generationDate = new Date(genericResponse.data.generationDate);
    });
  }

  public getFormattedGenerationString() {
    const result: string = this.generationDate.toLocaleString();
    return result;
  }

  public getBorderColor(allegianceLeaderboard: AllegianceLeaderboard): SafeStyle {
    const prefix = '1px solid ';
    const borderColor: SafeStyle = this.sanitizer.bypassSecurityTrustStyle(prefix + getColor(allegianceLeaderboard.team));
    return borderColor;
  }

  public getElementColor(allegianceLeaderboard: AllegianceLeaderboard): string {
    const color: string = getColor(allegianceLeaderboard.team);
    return color;
  }

  public getFormattedPortraitUrl(allegianceLeaderboard: AllegianceLeaderboard): string {
    const cleanedUrl: string = allegianceLeaderboard.portraitUrl.replace('/', '');
    const result: string = getBackendUrl() + cleanedUrl;
    return result;
  }

  public getFormattedPlayerCount(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.totalPlayers);
    return result;
  }

  public getFormattedTotalGil(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.totalGil);
    return result;
  }

  public getFormattedGilPerPlayer(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.decimalFormatNumber(allegianceLeaderboard.gilPerPlayer);
    return result;
  }

  public getFormattedTotalLevels(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.totalLevels);
    return result;
  }

  public getFormattedLevelsPerPlayer(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.decimalFormatNumber(allegianceLeaderboard.totalLevelsPerPlayer);
    return result;
  }

  public getFormattedTotalPrestiges(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.totalPrestiges);
    return result;
  }

  public getFormattedBetWins(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.betWins);
    return result;
  }

  public getFormattedBetLosses(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.betLosses);
    return result;
  }

  public getFormattedFightWins(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.fightWins);
    return result;
  }

  public getFormattedFightLosses(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.fightLosses);
    return result;
  }

  public getFormattedCurrentSeasonFightWinsAsChampion(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.commaFormat(allegianceLeaderboard.currentSeasonFightWinsAsChampion);
    return result;
  }

  public getFormattedBetRatio(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.decimalFormatNumber(allegianceLeaderboard.betRatio);
    return result;
  }

  public getFormattedFightRatio(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = this.decimalFormatNumber(allegianceLeaderboard.fightRatio);
    return result;
  }

  public getFormattedBetQuantile(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = generateOrdinal(allegianceLeaderboard.betQuantile);
    return result;
  }

  public getFormattedFightQuantile(allegianceLeaderboard: AllegianceLeaderboard): string {
    const result: string = generateOrdinal(allegianceLeaderboard.fightQuantile);
    return result;
  }

  public getPortraitName(allegianceLeaderboard: AllegianceLeaderboard): string {
    const parts: string[] = allegianceLeaderboard.portraitUrl.split('/');
    let result: string = parts[parts.length - 1];
    result = result.split('.gif')[0];
    return result;
  }

  public getFormattedPosition(entry: AllegianceLeaderboardEntry): string {
    const position: number = entry.position + 1;
    const result: string = position.toString();
    return result;
  }

  public getFormattedBalance(entry: AllegianceLeaderboardEntry): string {
    const result: string = this.commaFormat(entry.balance);
    return result;
  }

  public getProperTeamName(allegianceLeaderboard: AllegianceLeaderboard) {
    const result: string = capitalize(allegianceLeaderboard.team.toString().toLowerCase());
    return result;
  }

  protected decimalFormatNumber(value: number): string {
    const valueString: string = intToString(value);
    const result: string = parseFloat(valueString).toFixed(2);
    return result;
  }

  protected commaFormat(value: number): string {
    const result: string = value.toLocaleString();
    return result;
  }

}
