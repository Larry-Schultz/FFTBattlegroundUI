import { Component, OnInit, Input } from '@angular/core';

import { PlayerData } from '../../service/playerdata.service';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Component({
  selector: 'app-playerportrait',
  templateUrl: './playerportrait.component.html',
  styleUrls: ['./playerportrait.component.scss']
})
export class PlayerPortraitComponent implements OnInit {

  @Input()
  public playerData: PlayerData;

  public constructor() { }

  public ngOnInit(): void {
  }

  public getFullImageUrl(imageUrl: string): string {
    const cleanedImageUrl = imageUrl.replace('/', ''); // apparently only removes the first '/'
    const result = getBackendUrl() + cleanedImageUrl;
    return result;
  }

}
