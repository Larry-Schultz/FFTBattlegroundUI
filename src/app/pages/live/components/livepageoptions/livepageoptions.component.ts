import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GenericPairing } from 'src/app/util/genericresponse';

@Component({
  selector: 'app-livepageoptions',
  templateUrl: './livepageoptions.component.html',
  styleUrls: ['./livepageoptions.component.scss']
})
export class LivePageOptionsComponent implements OnInit {

  @Output()
  public optionsSelectionEvents: EventEmitter<GenericPairing<string, boolean>>;

  constructor() { }

  ngOnInit() {
  }

}
