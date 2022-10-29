import { TournamentTracker } from './tournamenttracker';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { TeamInfoEntry } from '../../teaminfo/model/teaminfoentry';
import { UnitInfoEvent } from '../../../model/TeamEvents/unitinfoevent';
import { TournamentWinData } from '../../../model/tournamentwindata';
import { TournamentUpdateEvent } from '../../../model/TeamEvents/tournamentupdateevent';
import { convertGenericPairingListToMap } from 'src/app/util/genericresponse';

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
