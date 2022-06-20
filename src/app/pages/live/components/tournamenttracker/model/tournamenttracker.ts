import { Allegiance } from 'src/app/model/playerRecord';
import { TeamInfoEntry } from '../../teaminfo/model/teaminfoentry';
import { UnitInfoEvent } from '../../../model/TeamEvents/unitinfoevent';
import { TournamentWinData } from '../../../model/tournamentwindata';

export const trackerAllegiances: Allegiance[] = [  Allegiance.RED, Allegiance.BLUE, Allegiance.GREEN, Allegiance. YELLOW, Allegiance.WHITE,
    Allegiance.BLACK, Allegiance.PURPLE, Allegiance.BROWN, Allegiance.CHAMPION ];

export interface TournamentTracker {
  teamStillActiveMap: Map<Allegiance, boolean> ;
  teamInfoMap: Map<Allegiance, TeamInfoEntry[]> ;
  playerUnitInfoMap: Map<Allegiance, UnitInfoEvent[]>
  tournamentWinMap: Map<Allegiance, TournamentWinData>;

}