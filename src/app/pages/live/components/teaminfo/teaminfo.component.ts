import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Allegiance } from 'src/app/model/playerRecord';
import { LiveData } from '../../model/livedata';
import { UnitInfoEvent } from '../../model/TeamEvents/unitinfoevent';
import { TeamInfoEntry } from './model/teaminfoentry';

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.scss']
})
export class TeamInfoComponent implements OnInit, OnChanges {

  @Input()
  public loading: boolean;

  @Input()
  public liveData: LiveData;

  @Input()
  public team1: Allegiance;

  @Input()
  public team2: Allegiance;

  public alive = true;


  constructor() { }

  public ngOnInit() {

  }

  public ngOnChanges() {

  }

  protected buildUnitArray(teamInfoEntries: TeamInfoEntry[], allUnitData: UnitInfoEvent[]): UnitInfoEvent[] {
	const unitArray: UnitInfoEvent[] = new Array<UnitInfoEvent>();
	for (const teamInfoEntry of teamInfoEntries) {
		const matchingUnits: UnitInfoEvent[] = allUnitData.filter(this.unitDataFilterFunction(teamInfoEntry));
		if (matchingUnits.length > 0) {
			//just get the first entry, since we should only get one result
			unitArray.push(matchingUnits[0]);
		}
	}

	return unitArray;
  }

	protected unitDataFilterFunction(teamInfoEntry: TeamInfoEntry): (unitInfoEvent: UnitInfoEvent) => boolean {
		const func = (unitInfoEvent: UnitInfoEvent): boolean => {
			return teamInfoEntry.player === unitInfoEvent.player && teamInfoEntry.className === unitInfoEvent.unit.Class;
		};
		return func;
	}
}
