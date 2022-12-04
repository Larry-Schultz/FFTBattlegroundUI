import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MyChartData } from "src/app/fragments/mychartcomponent/model/MyChartData";
import { CleanedBotlandData } from '../../service/botlanddata.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-botlanddisplay',
  templateUrl: './botlanddisplay.component.html',
  styleUrls: ['./botlanddisplay.component.scss']
})
export class BotlandDisplayComponent implements OnInit, OnChanges {

  @Input()
  public chartData: MyChartData;
  @Input()
  public botlandData: CleanedBotlandData;
  @Input()
  public botlandDataTrigger: Subject<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

}
