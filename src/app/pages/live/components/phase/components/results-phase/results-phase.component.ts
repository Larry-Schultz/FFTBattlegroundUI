import { Component, Input, OnInit } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-results-phase',
  templateUrl: './results-phase.component.html',
  styleUrls: ['./results-phase.component.scss']
})
export class ResultsPhaseComponent implements OnInit {

  @Input()
  public eventTime: number;

  public countdownConfig: CountdownConfig;

  public constructor() { }

  public ngOnInit(): void { }

}
