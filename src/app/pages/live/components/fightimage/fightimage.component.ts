import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { UnitInfoEvent } from '../../model/TeamEvents/unitinfoevent';
import { TeamInfoEntry } from '../teaminfo/model/teaminfoentry';
import { Gender } from '../../model/BattleGroundEvents/gender';
import { capitalize } from 'src/app/util/util';

@Component({
  selector: 'app-fightimage',
  templateUrl: './fightimage.component.html',
  styleUrls: ['./fightimage.component.scss']
})
export class FightImageComponent implements OnInit, OnChanges {

  @Input()
  public teamInfo: TeamInfoEntry;

  @Input()
  public unitInfo: UnitInfoEvent;

  public imageUrl: string;
  public imageTitle: string

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {
    if (this.unitInfo) {
      this.imageUrl = this.generateUnitImageString(this.unitInfo);
      this.imageTitle = this.generateUnitImageTitle(this.unitInfo);
    }
  }

  public generateUnitImageString(event: UnitInfoEvent): string {
		const baseUrl: string = getBackendUrl() + 'images/characters/';
		let className: string = event.unit.Class;
		if (className.startsWith('Calculator')) {
			className = className.split('(')[0].trim();
		}
		const gender: Gender = event.unit.Gender;

		let characterImageString: string;
		if (gender !== Gender.MONSTER) {
			if (className === 'Time Mage') {
				className = 'TimeMage';
			}
			characterImageString = baseUrl + className + ' ' + capitalize(gender.toString());
		} else {
			characterImageString = baseUrl + className.replace(' ', '');
		}

		return characterImageString;
	}

	public generateUnitImageTitle(event: UnitInfoEvent): string {
		const className: string = event.unit.Class;
		const gender: Gender = event.unit.Gender;

		let characterImageTitle: string;
		if (gender !== Gender.MONSTER) {
			characterImageTitle = className + ' - ' + gender;
		} else {
			characterImageTitle = className;
		}

		return characterImageTitle;
	}
}
