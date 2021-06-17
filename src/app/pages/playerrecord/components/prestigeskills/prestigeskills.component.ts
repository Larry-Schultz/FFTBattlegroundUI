import { Component, OnInit, Input } from '@angular/core';
import { PlayerSkill } from 'src/app/model/playerRecord';

@Component({
  selector: 'app-prestigeskills',
  templateUrl: './prestigeskills.component.html',
  styleUrls: ['./prestigeskills.component.scss']
})
export class PrestigeSkillsComponent implements OnInit {

  @Input()
  public prestigeSkills: PlayerSkill[];

  @Input()
  public containsPrestige: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
