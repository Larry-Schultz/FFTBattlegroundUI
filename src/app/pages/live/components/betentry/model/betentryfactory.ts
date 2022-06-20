import { BetEntry } from './betentry';
import { BetEvent } from '../../../model/BetEvents/betevent';
import { BetInfoEvent } from '../../../model/BetEvents/betinfoevent';
import { BetType } from '../../../model/BattleGroundEvents/bettype';

export class BetEntryFactory {
  static betEntryFromBetEvent(event: BetEvent): BetEntry {
    const betEntry = new BetEntry(event.player, event.betAmount, event.team, event.metadata);
    betEntry.betType = event.betType;
    betEntry.betText = event.betText;
    return betEntry;
  }

  static betEntryFromBetInfoEvent(event: BetInfoEvent): BetEntry {
    const betEntry = new BetEntry(event.player, event.betAmount.toString(), event.team, event.metadata);
    betEntry.betType = BetType.VALUE
    betEntry.betText = event.betAmount.toString();
    return betEntry;
  }
}