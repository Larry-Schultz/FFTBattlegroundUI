import { UnitStatus } from './unitstatus';

export interface UnitStats {
	hp: number;
	mp: number;
	move: number;
	jump: number;
	speed: number;
	pa: number;
	ma: number;
	cEv: number;
	permStatuses: UnitStatus[];
	initialStatuses: UnitStatus[];
}