import { BattleGroundEventType } from './battlegroundeventtype';

export interface BattleGroundEvent {
    eventTime: number;
    eventType: BattleGroundEventType;
}