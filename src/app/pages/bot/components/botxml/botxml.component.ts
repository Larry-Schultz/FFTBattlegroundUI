import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { BotData } from 'src/app/pages/botland/model/botdata';

@Component({
  selector: 'app-botxml',
  templateUrl: './botxml.component.html',
  styleUrls: ['./botxml.component.scss']
})
export class BotxmlComponent implements OnInit, OnChanges {

  @Input()
  public botData: BotData;

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {

  }

  public generateXmlString(): string[] {
    const xml: string[] = [];
    xml.push(`<bot id="${this.botData.name}" canPrimary="${this.botData.canPrimary}" description="${this.botData.description}">\n`);
    for (const param of this.botData.params) {
      xml.push(`<param id="${param.paramName}" description="${param.param.description}">${param.param.value}</param>\n`);
    }
    xml.push(`</bot>\n`);
    return xml;
  }

}
