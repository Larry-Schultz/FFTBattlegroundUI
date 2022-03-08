import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Allegiance } from 'src/app/model/playerRecord';
import { UnitInfoEvent, TournamentUpdateEvent, TeamInfoEvent, TournamentWinData } from '../../model/teamevents';
import { convertGenericPairingListToMap, GenericPairing } from 'src/app/util/genericresponse';
import { TeamInfoEntry } from '../teaminfo/teaminfo.component';
import { getColor } from 'src/app/util/colorsetter';


const trackerAllegiances: Allegiance[] = [  Allegiance.RED, Allegiance.BLUE, Allegiance.GREEN, Allegiance. YELLOW, Allegiance.WHITE,
    Allegiance.BLACK, Allegiance.PURPLE, Allegiance.BROWN, Allegiance.CHAMPION ];

@Component({
  selector: 'app-tournamenttracker',
  templateUrl: './tournamenttracker.component.html',
  styleUrls: ['./tournamenttracker.component.scss']
})
export class TournamentTrackerComponent implements OnInit, OnChanges {

  @Input()
  public loading: boolean;

  @Input()
  public tournamentData: TournamentTracker;

  public allegiances: Allegiance[] = trackerAllegiances;

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {
    if (this.tournamentData != null) {
      console.log("received an update for tournamentDate");
    }
  }

  public allegianceColor(allegiance: Allegiance): string {
    const color = getColor(allegiance);
    return color;
  }

  //only sets a border for the champion
  public rowBorderColor(allegiance: Allegiance): string {
    if (allegiance === Allegiance.CHAMPION) {
      return 'border:1px solid ' + getColor(allegiance);
    } else {
      return null;
    }
  }

}

export interface TournamentTracker {
  teamStillActiveMap: Map<Allegiance, boolean> ;
  teamInfoMap: Map<Allegiance, TeamInfoEntry[]> ;
  playerUnitInfoMap: Map<Allegiance, UnitInfoEvent[]>
  tournamentWinMap: Map<Allegiance, TournamentWinData>;

}

export class TournamentTrackerData implements TournamentTracker {
  public teamStillActiveMap: Map<Allegiance, boolean> ;
  public teamInfoMap: Map<Allegiance, TeamInfoEntry[]> ;
  public playerUnitInfoMap: Map<Allegiance, UnitInfoEvent[]>;
  public tournamentWinMap: Map<Allegiance, TournamentWinData>;

  constructor(event: TournamentUpdateEvent) {
    this.teamStillActiveMap = convertGenericPairingListToMap(event.teamStillActiveMap);
    this.playerUnitInfoMap = convertGenericPairingListToMap(event.playerUnitInfoMap);
    this.tournamentWinMap = convertGenericPairingListToMap(event.tournamentWinMap);

    this.teamInfoMap = new Map<Allegiance, TeamInfoEntry[]>();
    for (const genericTeamInfoEventPairing of event.teamInfoMap) {
      const teamInfoEntries: TeamInfoEntry[] = TeamInfoEntry.generateTeamInfoEntries(genericTeamInfoEventPairing.value);
      this.teamInfoMap.set(genericTeamInfoEventPairing.key, teamInfoEntries);
    }
  }

}

export class TournamentTrackerBlank implements TournamentTracker {
  public teamStillActiveMap: Map<Allegiance, boolean> ;
  public teamInfoMap: Map<Allegiance, TeamInfoEntry[]> ;
  public playerUnitInfoMap: Map<Allegiance, UnitInfoEvent[]>
  public tournamentWinMap: Map<Allegiance, TournamentWinData>;

  public constructor() {
    this.teamStillActiveMap = new Map<Allegiance, boolean>();
    this.teamInfoMap = new Map<Allegiance, TeamInfoEntry[]>()
    this.playerUnitInfoMap = new Map<Allegiance, UnitInfoEvent[]>();
    this.tournamentWinMap = new Map<Allegiance, TournamentWinData>();

    for (const allegiance of trackerAllegiances) {
      this.teamStillActiveMap.set(allegiance, true);
      this.teamInfoMap.set(allegiance, [null, null, null, null]);
      this.playerUnitInfoMap.set(allegiance, [null, null, null, null]);

      this.tournamentWinMap.set(allegiance, {wins: [], losses: [], streak: null});
    }
  }
}
