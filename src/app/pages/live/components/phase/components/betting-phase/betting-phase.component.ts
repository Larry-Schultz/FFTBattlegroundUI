import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-betting-phase',
  templateUrl: './betting-phase.component.html',
  styleUrls: ['./betting-phase.component.scss']
})
export class BettingPhaseComponent implements OnInit {

  @Input()
  public eventTime: number;

  public constructor() { }

  public ngOnInit(): void { }

}
