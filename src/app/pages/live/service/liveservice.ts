import { Injectable } from '@angular/core';
import * as $ from 'jquery';

import { Allegiance } from 'src/app/model/playerRecord';
import { EventWebSocketAPI } from '../../../util/websocketapi';
import { getBackendUrl } from '../../../util/getbackendurl';
import { emptyArray } from '../../../util/util';
import { GenericResponse, GenericElementOrdering } from 'src/app/util/genericresponse';

import { BattleGroundEventType, BattleGroundEvent} from '../model/battlegroundevent';
import { BettingBeginsEvent, BetEvent, BetInfoEvent, BadBetEvent, ResultsEvent, BettingEndsEvent } from '../model/betevents';
import { BadFightEvent, FightEntryEvent, FightBeginsEvent } from '../model/fightevents';
import { TeamInfoEvent, UnitInfoEvent, TournamentUpdateEvent } from '../model/teamevents';
import { BetEntry, BetEntryFactory } from '../components/betentry/betentry.component';
import { LiveData } from '../model/livedata';
import { MusicEvent, SkillDropEvent, MatchInfoEvent } from '../model/matchevents';
import { Notice } from '../components/notice/notice.component';
import { FightEntry } from '../components/fightentry/fightentry.component';
import { TeamInfoEntry } from '../components/teaminfo/teaminfo.component';
import { GridMode } from '../components/grids/grids.component';
import { TournamentTrackerData } from '../components/tournamenttracker/tournamenttracker.component';

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
				const badFightEvent = event as BadFightEvent;
				classRef.removeBadFightEntry(badFightEvent);
				break;
			case BattleGroundEventType.MUSIC:
				const musicEvent: MusicEvent = event as MusicEvent;
				classRef.handleMusicEvent(musicEvent);
				break;
		}

	}

	protected handleFightBegins(event: FightBeginsEvent): void {
		this.resetMatchBlock();
		this.loading = false;
		this.liveData.currentNotice = Notice.FIGHT_NOTICE;
		this.liveData.gridMode = GridMode.FIGHT;
		this.liveData.team1 = null;
		this.liveData.team2 = null;
		this.liveData.blankOutTournamentData();
	}

	protected handleResultsEvent(event: ResultsEvent): void {
		this.liveData.currentNotice = Notice.RESULTS_NOTICE;
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
		this.liveData.musicEvent = event;
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
		} else if (event.team === this.liveData.team2) {
			this.liveData.addTeamInfo(Allegiance.RIGHT, TeamInfoEntry.generateTeamInfoEntries(event));
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
