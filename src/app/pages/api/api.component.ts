import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { getBackendUrl } from 'src/app/util/getbackendurl';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      SwaggerUI({
          domNode: document.getElementById('swagger-ui-item'),
          url: getBackendUrl() + 'v2/api-docs'
        });
  }

  

}
