import { Component, OnInit } from '@angular/core';

import { GlobalGilCountDataService, GlobalGilCountData } from './service/globalgilcountdata.service';
import { GenericResponse } from 'src/app/util/genericresponse';

@Component({
  selector: 'app-globalgilcount',
  templateUrl: './globalgilcount.component.html',
  styleUrls: ['./globalgilcount.component.scss']
})
export class GlobalGilCountComponent implements OnInit {

  globalGilCountData: GlobalGilCountData;

  constructor(private globalGilCountDataService: GlobalGilCountDataService) { }

  ngOnInit() {
    this.globalGilCountDataService.find().subscribe((genericResponse: GenericResponse<GlobalGilCountData>): void => {
      this.globalGilCountData = genericResponse.data;
    });
  }

}
