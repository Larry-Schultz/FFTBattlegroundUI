import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-phase',
  templateUrl: './match-phase.component.html',
  styleUrls: ['./match-phase.component.scss']
})
export class MatchPhaseComponent implements OnInit {

  @Input()
  public eventTime: number;

  public constructor() { }

  public ngOnInit(): void { }

}
