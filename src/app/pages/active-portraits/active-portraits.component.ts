import { Component, OnInit } from '@angular/core';
import { getBackendUrl } from 'src/app/util/getbackendurl';
import { ActivePortraitsService } from './services/ActivePortraitsService/active-portraits.service';
import { PortraitPageService } from './services/PortraitPage/portrait-page.service';

@Component({
  selector: 'app-active-portraits',
  templateUrl: './active-portraits.component.html',
  styleUrls: ['./active-portraits.component.scss']
})
export class ActivePortraitsComponent implements OnInit {

  public activePortraits: string[];

  public constructor(private readonly activePortraitService: ActivePortraitsService,
    private readonly portraitPageService: PortraitPageService) { }

  public ngOnInit(): void {
    this.portraitPageService.log();
    this.activePortraitService.find().subscribe((genericResponse) => {
      this.activePortraits = genericResponse.data;
    });
  }

  public getFullImageUrl(portrait: string): string {
    const result = getBackendUrl() + `images/portraits/${portrait}`;
    return result;
  }

}
