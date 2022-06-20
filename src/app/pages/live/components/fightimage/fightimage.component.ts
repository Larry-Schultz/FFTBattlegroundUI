import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { UnitInfoEvent } from '../../model/TeamEvents/unitinfoevent';
import { TeamInfoEntry } from '../teaminfo/model/teaminfoentry';

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
		const gender: string = event.unit.Gender;

		let characterImageString: string;
		if (gender != 'Monster') {
			if (className == 'Time Mage') {
				className = 'TimeMage';
			}
			characterImageString = baseUrl + className + ' ' + gender;
		} else {
			characterImageString = baseUrl + className.replace(' ', '');
		}

		return characterImageString;
	}

	public generateUnitImageTitle(event: UnitInfoEvent): string {
		const className: string = event.unit.Class;
		const gender: string = event.unit.Gender;

		let characterImageTitle: string;
		if (gender !== 'Monster') {
			characterImageTitle = className + ' - ' + gender;
		} else {
			characterImageTitle = className;
		}

		return characterImageTitle;
	}
}
