import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { convertToInt, getFixedDecimal } from 'src/app/util/util';
import { TeamInfoEvent, UnitInfoEvent } from '../../model/teamevents';
import { Allegiance, PlayerRecord } from 'src/app/model/playerRecord';
import { LiveData } from '../../model/livedata';

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.scss']
})
export class TeamInfoComponent implements OnInit, OnChanges {

  @Input()
  public loading: boolean;

  @Input()
  public liveData: LiveData;

  @Input()
  public team1: Allegiance;

  @Input()
  public team2: Allegiance;


  constructor() { }

  public ngOnInit() {

  }

  public ngOnChanges() {

  }

  protected buildUnitArray(teamInfoEntries: TeamInfoEntry[], allUnitData: UnitInfoEvent[]): UnitInfoEvent[] {
	const unitArray: UnitInfoEvent[] = new Array<UnitInfoEvent>();
	for (const teamInfoEntry of teamInfoEntries) {
		const matchingUnits: UnitInfoEvent[] = allUnitData.filter(this.unitDataFilterFunction(teamInfoEntry));
		if (matchingUnits.length > 0) {
			//just get the first entry, since we should only get one result
			unitArray.push(matchingUnits[0]);
		}
	}

	return unitArray;
  }

	protected unitDataFilterFunction(teamInfoEntry: TeamInfoEntry): (unitInfoEvent: UnitInfoEvent) => boolean {
		const func = (unitInfoEvent: UnitInfoEvent): boolean => {
			return teamInfoEntry.player === unitInfoEvent.player && teamInfoEntry.className === unitInfoEvent.unit.Class;
		};
		return func;
	}
}

export class TeamInfoEntry {
  public player: string;
  public team: Allegiance
  public className: string;
  public playerDataString: string

  public constructor(player: string, team: Allegiance, className: string, playerDataString: string) {
    this.player = player;
    this.team = team;
    this.className = className;
    this.playerDataString = playerDataString;
  }

  public static generateTeamInfoEntries(teamInfoEvent: TeamInfoEvent): TeamInfoEntry[] {
    const team = teamInfoEvent.team;
    const teamInfoEntries = new Array<TeamInfoEntry>();
    for (const genericPair of teamInfoEvent.playerUnitPairs) {
      const player = genericPair.key;
      const className = genericPair.value;
      const relevantPlayerRecord = TeamInfoEntry.getPlayerRecordByPlayer(player, teamInfoEvent.metaData);
      const playerDataString = TeamInfoEntry.generatePlayerDataString(relevantPlayerRecord)
      const teamInfoEntry = new TeamInfoEntry(player, team, className, playerDataString);
      teamInfoEntries.push(teamInfoEntry);
    }

    return teamInfoEntries;
  }

  protected static generatePlayerDataString(playerRecord: PlayerRecord) {
    let result: string = null;
    if (playerRecord) {
      const wins = (playerRecord.fightWins != null && playerRecord.fightWins > 0 ? playerRecord.fightWins : 1);
      const losses = (playerRecord.fightLosses != null && playerRecord.fightLosses > 0 ? playerRecord.fightLosses : 1);
      let playerWinLossRatio: number = wins / (wins + losses);
      playerWinLossRatio = getFixedDecimal(playerWinLossRatio * 100, 0);
      result = 'Fighting: Wins: ' + playerRecord.fightWins.toLocaleString() + ' Losses: ' + playerRecord.fightLosses.toLocaleString() 
            + ' Ratio: ' + playerWinLossRatio.toString() + '%"';
    }

    return result;
  }

  protected static getPlayerRecordByPlayer(player: string, playerRecordArray: PlayerRecord[]): PlayerRecord {
    if (!playerRecordArray) {
      return null;
    }
    const filteredPlayerRecords: PlayerRecord[] = playerRecordArray.filter((playerRecord: PlayerRecord): boolean => {
      return playerRecord.player === player;
    });
    let result: PlayerRecord = null;
    if (filteredPlayerRecords.length > 0) {
      result = filteredPlayerRecords[0];
    }
    return result;
  }
}
