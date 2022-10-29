import { BattleGroundEvent } from '../BattleGroundEvents/battlegroundevent';
import { Unit } from '../unit';
import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { UnitStats } from './unitstats';
import { UnitTipInfo } from './unittipinfo';

export interface UnitInfoEvent extends BattleGroundEvent {
    player: string;
	unitInfoString: string;
	unit: Unit
	isRaidBoss: boolean;
	team: Allegiance;
	position: number;

	unitStats: UnitStats;
	unitTipInfo: UnitTipInfo
}
