import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { UnitStats } from '../../model/TeamEvents/unitstats';

@Component({
  selector: 'app-mustadiodata',
  templateUrl: './mustadiodata.component.html',
  styleUrls: ['./mustadiodata.component.scss']
})
export class MustadioDataComponent implements OnInit, OnChanges {

  @Input()
  public unitStats: UnitStats;

  @Input()
  public brave: number;

  @Input()
  public faith: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
