import { BetEntry } from '../components/betentry/betentry.component';
import { MusicEvent, SkillDropEvent, MatchInfoEvent } from './matchevents';
import { Notice } from '../components/notice/notice.component';
import { GridMode } from '../components/grids/grids.component';
import { FightEntry } from '../components/fightentry/fightentry.component';
import { TeamInfoEvent, UnitInfoEvent } from './teamevents';
import { Allegiance } from 'src/app/model/playerRecord';
import { BadBetEvent } from './betevents';
import { BadFightEvent } from './fightevents';
import { TeamInfoEntry } from '../components/teaminfo/teaminfo.component';
import { cloneDeep } from 'lodash';

const TEAM_INFO_COUNT = 4;

export class LiveData {
    public team1: Allegiance;
    public team2: Allegiance;
    public team1BetEntries: BetEntry[] = new Array<BetEntry>();
    public team2BetEntries: BetEntry[] = new Array<BetEntry>();
    public fightEntries: FightEntry[] = new Array<FightEntry>();
    public loading = true;
    public musicEvent: MusicEvent;
    public skillDropEvent: SkillDropEvent;
    public currentNotice = Notice.LOADING_NOTICE;
    public matchInfo: MatchInfoEvent;
    public gridMode: GridMode = GridMode.BET;

    private team1TeamInfo: TeamInfoEntry[];
    private team2TeamInfo: TeamInfoEntry[];
    private team1UnitInfo: UnitInfoEvent[] = new Array<UnitInfoEvent>();
    private team2UnitInfo: UnitInfoEvent[]

    public constructor() {
        this.team1BetEntries = new Array<BetEntry>();
        this.team2BetEntries = new Array<BetEntry>();
        this.fightEntries = new Array<FightEntry>();
        this.currentNotice = Notice.LOADING_NOTICE;

        this.team1TeamInfo = new Array<TeamInfoEntry>(TEAM_INFO_COUNT);
        this.team2TeamInfo = new Array<TeamInfoEntry>(TEAM_INFO_COUNT);
        this.team1UnitInfo = new Array<UnitInfoEvent>(TEAM_INFO_COUNT);
        this.team2UnitInfo = new Array<UnitInfoEvent>(TEAM_INFO_COUNT);
    }

    public addBetEntry(side: Allegiance, betEntry: BetEntry): void {
        let betEntryArray: BetEntry[];
        let otherBetArray: BetEntry[];
        if (side === Allegiance.LEFT) {
            betEntryArray = this.team1BetEntries;
            otherBetArray = this.team2BetEntries;
        } else if (side === Allegiance.RIGHT) {
            betEntryArray = this.team2BetEntries;
            otherBetArray = this.team1BetEntries;
        } else {
            return;
        }
        const findFunction = (betEntryObj: BetEntry): boolean => {
            return betEntryObj.player === betEntry.player;
        };
        const otherTeamEntry: BetEntry = otherBetArray.find(findFunction);
        if (otherTeamEntry) {
            const otherTeamBetEntryIndex: number = otherBetArray.indexOf(otherTeamEntry);
            if (otherTeamBetEntryIndex !== -1) {
                otherBetArray.splice(otherTeamBetEntryIndex, 1);
            }
            otherBetArray.sort(BetEntry.compare);
        }

        const duplicateEntry = betEntryArray.find(findFunction);
        if (duplicateEntry) {
            duplicateEntry.replaceData(betEntry);
        } else {
            betEntryArray.push(betEntry);
        }
        betEntryArray.sort(BetEntry.compare);
    }

    public removeBetEntry(badBetEvent: BadBetEvent): void {
        for (const player of badBetEvent.players) {
            const findFunction = (betEntryObj: BetEntry): boolean => {
                return betEntryObj.player === player;
            }
            const team1Matches: BetEntry[] = this.team1BetEntries.filter(findFunction);
            const team2Matches: BetEntry[] = this.team2BetEntries.filter(findFunction);
            for (const betEntry of team1Matches) {
                const index = this.team1BetEntries.indexOf(betEntry);
                this.team1BetEntries.splice(index, 1);
            }
            for (const betEntry of team2Matches) {
                const index = this.team2BetEntries.indexOf(betEntry);
                this.team2BetEntries.splice(index, 1);
            }
        }
        this.team1BetEntries.sort(BetEntry.compare);
        this.team2BetEntries.sort(BetEntry.compare);
    }

    public addFightEntry(fightEntryEvent: FightEntry): void {
        const duplicateEntries: FightEntry[] = this.fightEntries.filter((fightEntry: FightEntry): boolean => {
            return fightEntry.player === fightEntryEvent.player;
        });
        for (const entry of duplicateEntries) {
            const index = this.fightEntries.indexOf(entry);
            this.fightEntries.splice(index, 1);
        }
        this.fightEntries.push(fightEntryEvent);
        this.fightEntries.sort(FightEntry.compare);
    }

    public removeBadFightEntry(badFightEntry: BadFightEvent): void {
        const duplicateEntries: FightEntry[] = this.fightEntries.filter((fightEntry: FightEntry): boolean => {
            return fightEntry.player === badFightEntry.player;
        });
        for (const entry of duplicateEntries) {
            const index = this.fightEntries.indexOf(entry);
            this.fightEntries.splice(index, 1);
        }

        this.fightEntries.sort(FightEntry.compare);
    }

    public addTeamInfo(side: Allegiance, entries: TeamInfoEntry[]): void {
        if (side === Allegiance.LEFT) {
            for (let i = 0; i < entries.length; i++) {
                this.team1TeamInfo[i] = entries[i];
            }
        } else if (side === Allegiance.RIGHT) {
            for (let i = 0; i < entries.length; i++) {
                this.team2TeamInfo[i] = entries[i];
            }
        }
    }

    public clearTeamInfo(): void {
        for (let i = 0; i < TEAM_INFO_COUNT; i++) {
            this.team1TeamInfo[i] = null;
            this.team2TeamInfo[i] = null;
        }
    }

    public getTeam1TeamInfo(index: number): TeamInfoEntry {
        return this.team1TeamInfo[index];
    }

    public getTeam2TeamInfo(index: number) {
        return this.team2TeamInfo[index];
    }

    public addUnitInfo(side: Allegiance, entry: UnitInfoEvent): void {
        if (side === Allegiance.LEFT) {
            this.team1UnitInfo[entry.position] = entry;
        } else if (side === Allegiance.RIGHT) {
            this.team2UnitInfo[entry.position] = entry;
        }
    }

    public clearUnitInfo(): void {
        for (let i = 0; i < TEAM_INFO_COUNT; i++) {
            this.team1UnitInfo[i] = null;
            this.team2UnitInfo[i] = null;
        }
    }

    public getTeam1UnitInfo(index: number): UnitInfoEvent {
        return this.team1UnitInfo[index];
    }

    public getTeam2UnitInfo(index: number): UnitInfoEvent {
        return this.team2UnitInfo[index];
    }
}
