import { Allegiance } from 'src/app/model/playerRecord';
import { TournamentTracker, trackerAllegiances } from './tournamenttracker';
import { TeamInfoEntry } from '../../teaminfo/model/teaminfoentry';
import { UnitInfoEvent } from '../../../model/TeamEvents/unitinfoevent';
import { TournamentWinData } from '../../../model/tournamentwindata';

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