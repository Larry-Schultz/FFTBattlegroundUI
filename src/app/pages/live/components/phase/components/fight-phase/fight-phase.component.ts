import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FightEntry } from '../../../fightentry/model/fightentry';

@Component({
  selector: 'app-fight-phase',
  templateUrl: './fight-phase.component.html',
  styleUrls: ['./fight-phase.component.scss']
})
export class FightPhaseComponent implements OnInit, OnChanges {

  @Input()
  public eventTime: number;

  @Input()
  public fightEntries: FightEntry[]

  public constructor() { }

  public ngOnInit(): void { }

  public ngOnChanges(changes: SimpleChanges): void { }

}
