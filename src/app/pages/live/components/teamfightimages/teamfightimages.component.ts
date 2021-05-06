import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LiveData } from '../../model/livedata';

@Component({
  selector: 'app-teamfightimages',
  templateUrl: './teamfightimages.component.html',
  styleUrls: ['./teamfightimages.component.scss']
})
export class TeamFightImagesComponent implements OnInit, OnChanges {

  @Input()
  public liveData: LiveData;

  public constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {
    
  }

}
