import { Component, OnInit } from '@angular/core';

import { GenericResponse } from 'src/app/util/genericresponse';
import { getColor } from 'src/app/util/colorsetter';
import { AscensionData, AscensionDataService, PrestigeEntry } from './service/ascensiondata.service';

@Component({
  selector: 'app-ascension',
  templateUrl: './ascension.component.html',
  styleUrls: ['./ascension.component.scss']
})
export class AscensionComponent implements OnInit {

  prestigeTable: PrestigeEntry[];
  generationDateString: string;

  constructor(private ascensionDataService: AscensionDataService) { }

  ngOnInit() {
    this.ascensionDataService.find().subscribe((genericResponse: GenericResponse<AscensionData>): void => {
      this.prestigeTable = genericResponse.data.prestigeData;
      this.generationDateString = genericResponse.data.generationDateString;
    });
  }

  getColorForPrestige(prestigeTable: PrestigeEntry): string {
    const color: string = getColor(prestigeTable.allegiance);
    return color;
  }

}
