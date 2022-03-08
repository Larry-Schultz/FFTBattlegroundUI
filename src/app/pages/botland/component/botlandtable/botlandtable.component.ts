import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CleanedBotlandData } from '../../service/botlanddata.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-botlandtable',
  templateUrl: './botlandtable.component.html',
  styleUrls: ['./botlandtable.component.scss']
})
export class BotlandTableComponent implements OnInit, OnChanges {

  @Input() botlandData: CleanedBotlandData;
  @Input() botlandDataTrigger: Subject<any>;

  public dtOptions: DataTables.Settings = {
    ordering:  true,
    order: [[ 1, 'desc' ]],
    paging: false,
    columns: [
      { type: 'html' },
      { type: 'num' },
      { type: 'num' },
      { type: 'num' },
      { type: 'num' },
      { type: 'num-fmt' },
      { type: 'html' },
    ]
  };

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  public getPersonalityMessage(botName: string): string {
    let result: string = this.botlandData.lastBotPersonalityResponses.get(botName);
    if (result) {
      result = result.replace(botName + ':', '');
    }
    return result;
  }

}
