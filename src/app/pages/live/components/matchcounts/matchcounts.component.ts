import { Component, OnInit, Input, IterableDiffers, DoCheck } from '@angular/core';
import { getFixedDecimal, stringToInt, capitalize } from 'src/app/util/util';
import { Allegiance } from 'src/app/model/playerRecord';
import { GridMode } from '../grids/grids.component';
import { getColor } from 'src/app/util/colorsetter';
import { BetEntry } from '../betentry/model/betentry';

@Component({
  selector: 'app-matchcounts',
  templateUrl: './matchcounts.component.html',
  styleUrls: ['./matchcounts.component.scss']
})
export class MatchCountsComponent implements OnInit, DoCheck {

	@Input()
	public loading: boolean;

	@Input()
	public mode: GridMode;

	@Input()
	public team: Allegiance;

	@Input()
	public side: Allegiance;

	@Input()
	public myTeamBetEntries: BetEntry[];

	@Input()
	public otherTeamBetEntries: BetEntry[];

	public teamBetCount: number;
	public teamAmount: number;
	public teamPercentage: string;
	public teamOdds: string
	public teamName: string

	public sideName: string;

	protected differ: any;

	public constructor(differs: IterableDiffers) { 
		this.differ = differs.find([]).create(null);
	}

	public ngOnInit(): void {
		this.teamBetCount = 0;
		this.teamAmount = 0;
		this.teamPercentage = '0';
		this.teamOdds = getFixedDecimal(0, 2).toString();
		this.teamName = '';
		this.sideName = ''
	}

	public ngDoCheck() {
		const myChange = this.differ.diff(this.myTeamBetEntries);
		const theirChange = this.differ.diff(this.otherTeamBetEntries);

		if (myChange || theirChange) {
			this.updateData();
		}

	}

	public updateData(): void {
		if (this.myTeamBetEntries && this.otherTeamBetEntries) {
			this.teamBetCount = this.countBetsForGrid();
			this.teamAmount = this.countValuesforGrid();
			this.teamPercentage = this.calculatePercentageForTeam();
			this.teamOdds = this.calculateOddsForTeam();
		}
		if (this.team) {
			this.teamName = this.formatTeamName();
		}
		this.sideName = this.formatSideName();
	}

	public countBetsForGrid(): number {
		let count = 0;
		this.myTeamBetEntries.forEach((betEntry: BetEntry): void => {
			count++;
		});

		return count;
	}

	public countValuesforGrid(): number {
		const count = this.countValueForBetEntries(this.myTeamBetEntries);
		
		return count;
	}

	public calculateOddsForTeam(): string {
		const yourTeamTotalValue = this.countValueForBetEntries(this.myTeamBetEntries);
		const theirTeamTotalValue = this.countValueForBetEntries(this.otherTeamBetEntries);
		if (yourTeamTotalValue === 0 || theirTeamTotalValue === 0) {
			return '0';
		} else {
			const result =  (theirTeamTotalValue / yourTeamTotalValue);
			const resultString =  result.toFixed(3);
			return resultString;
		}
	}

	public calculatePercentageForTeam(): string {
		const yourTeamTotalValue = this.countValueForBetEntries(this.myTeamBetEntries);
		const theirTeamTotalValue = this.countValueForBetEntries(this.otherTeamBetEntries);
		if (yourTeamTotalValue === 0 || theirTeamTotalValue === 0) {
			return '0';
		} else {
			let result: number = yourTeamTotalValue / (yourTeamTotalValue + theirTeamTotalValue);
			result = result * 100;
			const resultString: string = result.toFixed(1);
			return resultString;
		}
	}

	public formatTeamName(): string {
		const fancyTeamName = this.formatAllegiance(this.team);
		return fancyTeamName;
	}

	public formatSideName(): string {
		const fancyTeamName = this.formatAllegiance(this.side);
		return fancyTeamName;
	}

	public showLoadingBar(): boolean {
		const showLoadingBar = this.mode === GridMode.FIGHT;
		return showLoadingBar;
	}

	public getColorForTeam(team: Allegiance): string {
		const results = getColor(team);
		return results;
	}

	protected formatAllegiance(allegiance: Allegiance): string {
		const fancyTeamName = capitalize(allegiance.toString());
		return fancyTeamName;
	}

	protected countValueForBetEntries(betEntries: BetEntry[]): number {
		let count = 0;
		betEntries.forEach((betEntry: BetEntry): void => {
			count = count + stringToInt(betEntry.betAmount);
		});

		return count;
	}

}
