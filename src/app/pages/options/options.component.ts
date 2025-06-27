import { Component, OnInit } from '@angular/core';
import { OptionsPageService } from './service/OptionsPageService/options-page-service.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  public constructor(private readonly optionsPageService: OptionsPageService) { }

  public ngOnInit(): void {
    this.optionsPageService.log();
  }

}
