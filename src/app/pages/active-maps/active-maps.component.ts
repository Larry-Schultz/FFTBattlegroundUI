import { Component, OnInit } from '@angular/core';

import { DumpActiveMap } from './model/DumpActiveMap';
import { ActiveMapsService } from './services/ActiveMaps/active-maps.service';
import { MapPageService } from './services/MapsPageService/map-page.service';

@Component({
  selector: 'app-active-maps',
  templateUrl: './active-maps.component.html',
  styleUrls: ['./active-maps.component.scss']
})
export class ActiveMapsComponent implements OnInit {

  public activeMaps: DumpActiveMap[];

  public constructor(private readonly activeMapsService: ActiveMapsService,
    private readonly mapPageService: MapPageService) { }

  public ngOnInit(): void {
    this.mapPageService.log();
    this.activeMapsService.find().subscribe((genericResponse) => {
      this.activeMaps = genericResponse.data;
    });
  }

  public getMapUrl(mapNumber: number): string {
    const result = 'https://ffhacktics.com/maps.php?id=' + mapNumber;
    return result;
  }

  public getMapIconSrc(mapNumber: number): string {
     const result = 'assets/maps/' + mapNumber + '.PNG';
     return result;
  }

}
