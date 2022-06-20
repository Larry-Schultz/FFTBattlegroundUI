import { Component, OnInit, Input } from '@angular/core';
import { UnitInfoEvent } from '../../model/TeamEvents/unitinfoevent';

@Component({
  selector: 'app-unitprofile',
  templateUrl: './unitprofile.component.html',
  styleUrls: ['./unitprofile.component.scss']
})
export class UnitprofileComponent implements OnInit {

  @Input()
  public unitInfo: UnitInfoEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
