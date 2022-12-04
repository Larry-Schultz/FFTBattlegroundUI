import { Injectable } from '@angular/core';
import * as $ from 'jquery';

import { Allegiance } from "src/app/model/PlayerRecord/Allegiance";
import { EventWebSocketAPI } from '../../../util/websocketapi';
import { getBackendUrl } from '../../../util/getbackendurl';
import { emptyArray } from '../../../util/util';
import { GenericResponse, GenericElementOrdering } from 'src/app/util/genericresponse';
import { LiveData } from '../model/livedata';
import { GridMode } from '../components/grids/grids.component';
import { BattleGroundEvent } from '../model/BattleGroundEvents/battlegroundevent';
import { BattleGroundEventType } from '../model/BattleGroundEvents/battlegroundeventtype';
import { BetEvent } from '../model/BetEvents/betevent';
import { FightEntryEvent } from '../model/FightEvents/fightentryevent';
import { BetInfoEvent } from '../model/BetEvents/betinfoevent';
import { BettingBeginsEvent } from '../model/BetEvents/bettingbeginsevent';
import { BettingEndsEvent } from '../model/BetEvents/bettingendsevent';
import { FightBeginsEvent } from '../model/FightEvents/fightbeginsevent';
import { ResultsEvent } from '../model/BetEvents/resultsevent';
import { FightResultsEvent } from '../model/BetEvents/fightresultsevent';
import { TeamInfoEvent } from '../model/TeamEvents/teaminfoevent';
import { UnitInfoEvent } from '../model/TeamEvents/unitinfoevent';
import { MatchInfoEvent } from '../model/MatchEvents/matchinfoevent';
import { TournamentUpdateEvent } from '../model/TeamEvents/tournamentupdateevent';
import { SkillDropEvent } from '../model/MatchEvents/skilldropevent';
import { BadBetEvent } from '../model/BetEvents/badbetevent';
import { BadFightEvent } from '../model/FightEvents/badfightevent';
import { MusicEvent } from '../model/MusicEvents/musicevent';
import { Notice } from '../components/phase/model/notice';
import { TournamentWinData } from '../model/tournamentwindata';
import { FightEntry } from '../components/fightentry/model/fightentry';
import { BetEntry } from '../components/betentry/model/betentry';
import { BetEntryFactory } from '../components/betentry/model/betentryfactory';
import { TeamInfoEntry } from '../components/teaminfo/model/teaminfoentry';
import { TournamentTrackerData } from '../components/tournamenttracker/model/tournamenttrackerdata';
import { HypeEvent } from '../model/MusicEvents/hypeevent';
import { Hype } from '../model/MusicEvents/hype';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
	public liveData: LiveData = new LiveData();

	public loading = true; // track if the page is in loading state.

	private eventIndex = null;

	public constructor(private eventWebSocketAPI: EventWebSocketAPI) {}


	connect(): void {
		this.eventWebSocketAPI.subscribe<LiveService>(this.parseEvents, this);
	}
	pullCurrentData(): any {
		const liveServiceRef = this;
		$.ajax({url: getBackendUrl() + 'api/matches/currentData',
			success(result: GenericResponse<GenericElementOrdering<BattleGroundEvent>[]>) {
			console.log(result);
			result.data.sort((a, b) => (a.id > b.id) ? 1 : -1);


			result.data.map((event: GenericElementOrdering<BattleGroundEvent>): void => {
				liveServiceRef.eventIndex = event.id;
				liveServiceRef.parseEvents(event.element, liveServiceRef);
			});
		}});

		this.eventWebSocketAPI.eventIndex = this.eventIndex;
	}

	parseEvents(event: BattleGroundEvent, classRef: LiveService) {
		console.log(JSON.stringify(event));

		switch (event.eventType) {
			case BattleGroundEventType.BET:
				const betEvent = event as BetEvent;
				classRef.handleBet(betEvent);
				break;
			case BattleGroundEventType.FIGHT_ENTRY:
				const fightEntryEvent = event as FightEntryEvent;
				classRef.handleFightEntry(fightEntryEvent);
				break;
			case BattleGroundEventType.BET_INFO:
				const betInfoEvent = event as BetInfoEvent;
				classRef.handleBetInfo(betInfoEvent);
				break;
			case BattleGroundEventType.BETTING_BEGINS:
				const bettingBeginsEvent = event as BettingBeginsEvent;
				classRef.handleBetBegins(bettingBeginsEvent);
				break;
			case BattleGroundEventType.BETTING_ENDS:
				const bettingEndsEvent = event as BettingEndsEvent;
				classRef.handleBetEnds(bettingEndsEvent);
				break;
			case BattleGroundEventType.FIGHT_BEGINS:
				const fightBeginsEvent = event as FightBeginsEvent;
				classRef.handleFightBegins(fightBeginsEvent);
				break;
			case BattleGroundEventType.RESULT:
				const resultsEvent = event as ResultsEvent;
				classRef.handleResultsEvent(resultsEvent);
				break;
			case BattleGroundEventType.FIGHT_RESULT:
				const fightResultsEvent = event as FightResultsEvent;
				classRef.handleFightResultsEvent(fightResultsEvent);
				break;
			case BattleGroundEventType.TEAM_INFO:
				const teamInfoEvent = event as TeamInfoEvent;
				classRef.handleTeamInfo(teamInfoEvent);
				break;
			case BattleGroundEventType.UNIT_INFO:
				const unitEvent = event as UnitInfoEvent;
				classRef.handleUnitInfo(unitEvent);
				break;
			case BattleGroundEventType.MATCH_INFO:
				const matchInfoEvent = event as MatchInfoEvent;
				classRef.populateMatchInfo(matchInfoEvent);
				break;
			case BattleGroundEventType.TOURNAMENT_STATUS_UPDATE_EVENT:
				const tournamentStatusUpdateEvent: TournamentUpdateEvent = event as TournamentUpdateEvent;
				classRef.handleTournamentStatusUpdateEvent(tournamentStatusUpdateEvent);
				break;
			case BattleGroundEventType.SKILL_DROP:
				const skillDropEvent = event as SkillDropEvent;
				classRef.populateSkillDrop(skillDropEvent);
				break;
			case BattleGroundEventType.BAD_BET:
				const badBetEvent = event as BadBetEvent;
				classRef.handleBadBet(badBetEvent);
				break;
			case BattleGroundEventType.INVALID_FIGHT_ENTRY_COMBINATION:
			case BattleGroundEventType.INVALID_FIGHT_ENTRY_CLASS:
			case BattleGroundEventType.UNOWNED_SKILL:
			case BattleGroundEventType.OTHER_PLAYER_SKILL_ON_COOLDOWN:
			case BattleGroundEventType.INVALID_FIGHT_ENTRY_SEX:
			case BattleGroundEventType.INVALID_FIGHT_ENTRY_TOURNAMENT_STARTED:
				const badFightEvent = event as BadFightEvent;
				classRef.removeBadFightEntry(badFightEvent);
				break;
			case BattleGroundEventType.MUSIC:
				const musicEvent: MusicEvent = event as MusicEvent;
				classRef.handleMusicEvent(musicEvent);
				break;
      case BattleGroundEventType.HYPE:
        const hypeEvent: HypeEvent = event as HypeEvent;
        classRef.handleHypeEvent(hypeEvent);
        break;
		}

	}

	protected handleFightBegins(event: FightBeginsEvent): void {
		this.resetMatchBlock();
		this.loading = false;
		this.liveData.currentNotice = Notice.FIGHT_NOTICE;
		this.liveData.gridMode = GridMode.FIGHT;
		this.liveData.eventTime = event.eventTime;
		this.liveData.team1 = null;
		this.liveData.team2 = null;
		this.liveData.blankOutTournamentData();
	}

	protected handleResultsEvent(event: ResultsEvent): void {
		this.liveData.currentNotice = Notice.RESULTS_NOTICE;
		this.liveData.eventTime = event.eventTime;
	}

	protected handleFightResultsEvent(event: FightResultsEvent): void {
		const tournamentWinMap: Map<Allegiance, TournamentWinData> = this.liveData.tournamentData.tournamentWinMap;
		tournamentWinMap.get(event.winner).wins.push(event.loser);
		tournamentWinMap.get(event.loser).losses.push(event.winner);
		if(event.winner === Allegiance.CHAMPION) {
			tournamentWinMap.get(event.winner).streak++;
		}
	}

	protected handleFightEntry(event: FightEntryEvent): void {
		const fightEntry = new FightEntry(event);
		this.liveData.addFightEntry(fightEntry);
	}

	protected removeBadFightEntry(event: BadFightEvent): void {
		this.liveData.removeBadFightEntry(event);
	}

	protected handleBetBegins(event: BettingBeginsEvent) {
		this.loading = false;
		this.resetMatchBlock();
		this.liveData.team1 = event.team1;
		this.liveData.team2 = event.team2;
		this.liveData.currentNotice = Notice.BETTING_NOTICE;
		this.liveData.gridMode = GridMode.BET;
		this.liveData.eventTime = event.eventTime;
	}

	protected handleBetEnds(event: BettingEndsEvent) {
		this.liveData.currentNotice = Notice.MATCH_NOTICE;
	}

	protected handleBet(event: BetEvent) {
		if (event.team === this.liveData.team1 || event.team === Allegiance.LEFT) {
			const betEntry: BetEntry = this.generatePlayerRecordFromBetEvent(event);
			this.liveData.addBetEntry(Allegiance.LEFT, betEntry);
		} else if (event.team === this.liveData.team2 || event.team === Allegiance.RIGHT) {
			const betEntry: BetEntry = this.generatePlayerRecordFromBetEvent(event);
			this.liveData.addBetEntry(Allegiance.RIGHT, betEntry);
		}

	}

	handleBadBet(event: BadBetEvent): void {
		this.liveData.removeBetEntry(event);
	}

	protected handleMusicEvent(event: MusicEvent): void {
		if(!this.liveData.musicEvent || this.liveData.musicEvent.songName !== event.songName) {
      this.liveData.hypeEmotes = new Array<Hype>();
    }
    this.liveData.musicEvent = event;
	}

  protected handleHypeEvent(event: HypeEvent): void {
    this.liveData.hypeEmotes = this.liveData.hypeEmotes.concat(event.hypeEmotes);
  }

	protected generatePlayerRecordFromBetEvent(event: BetEvent): BetEntry {
		const betEntry: BetEntry = BetEntryFactory.betEntryFromBetEvent(event);
		return betEntry;
	}

	protected generatePlayerRecordFromBetInfoEvent(event: BetInfoEvent): BetEntry {
		const betEntry: BetEntry = BetEntryFactory.betEntryFromBetInfoEvent(event);
		return betEntry;
	}

	protected handleBetInfo(event: BetInfoEvent) {
	if (event.team === this.liveData.team1 || event.team === Allegiance.LEFT) {
		const betEntry: BetEntry = this.generatePlayerRecordFromBetInfoEvent(event);
		this.liveData.addBetEntry(Allegiance.LEFT, betEntry);
	} else if (event.team === this.liveData.team2 || event.team === Allegiance.RIGHT) {
		const betEntry: BetEntry = this.generatePlayerRecordFromBetInfoEvent(event);
		this.liveData.addBetEntry(Allegiance.RIGHT, betEntry);
	}
	}

	protected populateMatchInfo(event: MatchInfoEvent): void {
		this.liveData.matchInfo = event;
	}

	protected populateSkillDrop(event: SkillDropEvent): void {
		this.liveData.skillDropEvent = event;
	}

	protected handleTeamInfo(event: TeamInfoEvent): void {
		if (event.team === this.liveData.team1) {
			this.liveData.addTeamInfo(Allegiance.LEFT, TeamInfoEntry.generateTeamInfoEntries(event));
      this.liveData.setTeam1TeamValue(event.teamValue);
		} else if (event.team === this.liveData.team2) {
			this.liveData.addTeamInfo(Allegiance.RIGHT, TeamInfoEntry.generateTeamInfoEntries(event));
      this.liveData.setTeam2TeamValue(event.teamValue);
		}
	}

	protected handleUnitInfo(event: UnitInfoEvent) {
		if (event.team === this.liveData.team1) {
			this.liveData.addUnitInfo(Allegiance.LEFT, event);
		} else if (event.team === this.liveData.team2) {
			this.liveData.addUnitInfo(Allegiance.RIGHT, event);
		}
	}

	protected handleTournamentStatusUpdateEvent(event: TournamentUpdateEvent) {
		this.liveData.setTournamentData(new TournamentTrackerData(event));
	}

	resetMatchBlock() {
		emptyArray(this.liveData.fightEntries);
		emptyArray(this.liveData.team1BetEntries)
		emptyArray(this.liveData.team2BetEntries)
		this.liveData.clearTeamInfo();
		this.liveData.clearUnitInfo();

	}

}
