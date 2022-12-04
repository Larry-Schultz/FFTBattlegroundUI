import { Component, OnInit} from '@angular/core';

import { getBackendUrl } from 'src/app/util/getbackendurl';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public constructor() {

  }

  public ngOnInit(): void {

  }

  public getSwaggerUrl(): string {
    return getBackendUrl() + 'swagger-ui/#/home-controller';
  }

}
