import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SkillDropEvent } from '../../model/matchevents';

@Component({
  selector: 'app-skilldrop',
  templateUrl: './skilldrop.component.html',
  styleUrls: ['./skilldrop.component.scss']
})
export class SkilldropComponent implements OnInit, OnChanges {

  @Input()
  public skillDropEvent: SkillDropEvent;

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {

  }

}
