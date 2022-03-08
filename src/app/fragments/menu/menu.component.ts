import { Component, OnInit } from '@angular/core';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getSwaggerUrl(): string {
    return getBackendUrl() + 'swagger-ui/#/home-controller';
  }

}