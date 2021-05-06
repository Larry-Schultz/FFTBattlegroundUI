import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { getColor } from '../../util/colorsetter';
import { EventWebSocketAPI } from '../../util/websocketapi';
import { getBackendUrl } from '../../util/getbackendurl';
import { SkillType, Allegiance } from 'src/app/model/playerRecord';
import { PlayerDataService, PlayerData } from './service/playerdata.service';
import { PlayerListService} from './service/playerlist.service';
import { PlayerBalanceHistoryService } from 'src/app/service/playerbalancehistory.service';
import { MyChartData } from 'src/app/fragments/mychartcomponent/mychartcomponent.component';
import { BattleGroundEvent } from '../live/model/battlegroundevent';

@Component({
  selector: 'app-playerrecord',
  templateUrl: './playerrecord.component.html',
  styleUrls: ['./playerrecord.component.scss']
})
export class PlayerRecordComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChart', {static: false}) lineChartElement: ElementRef;
  playerData: PlayerData;

  playerList: string[];
  playerName: string = null;
  currentSelectBoxSelection: string;

  chartData: MyChartData = null;

  constructor(private playerRecordService: PlayerDataService, private playerListService: PlayerListService,
              private playerBalanceHistoryService: PlayerBalanceHistoryService, private router: Router,
              private activatedRoute: ActivatedRoute, private eventWebSocketAPI: EventWebSocketAPI ) {
    this.activatedRoute.params.subscribe(params => {
      this.playerName = params.player;
    });
  }

  ngOnInit() {
    if (this.isPlayerPageRequest) {
      this.eventWebSocketAPI.subscribe<PlayerRecordComponent>(this.parseEvents, this);

      this.playerRecordService.find(this.playerName).subscribe(data => {
        this.playerData = data.data;
      });

      this.playerBalanceHistoryService.find(this.playerName, 'api/players/balanceHistory', 10, 1).subscribe(data => {
        const title = 'Player balance based on past participated tournaments (data where available)';
        this.chartData = this.playerBalanceHistoryService.generateMyChartData(data.data, title);
      });
    }
  }

  ngAfterViewInit() {
    this.playerListService.find().subscribe(data => {
        this.playerList = data.data;
      });
  }

  isPlayerPageRequest(): boolean {
    const result = !(this.playerName == null || typeof this.playerName === undefined);
    return result;
  }

  playerSearch() {
    const playerName = this.currentSelectBoxSelection.toString();
    if (playerName.length > 0) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigateByUrl('/player/' + playerName);
    }
  }

  parseEvents(event: BattleGroundEvent, classRef: PlayerRecordComponent) {
    switch (event.eventType) {
      case 'BETTING_BEGINS':
        classRef.reload();
        break;
      default:
        break;
    }

  }

  reload() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.set('refresh', 'true');
    window.location.search = urlParams.toString();
  }

  isSkillTypeUser(skillType: SkillType): boolean {
    const cleanedSkillType = skillType as SkillType;
    return cleanedSkillType === SkillType.USER;
  }

  getFullImageUrl(imageUrl: string) {
    const cleanedImageUrl = imageUrl.replace('/', ''); // apparently only removes the first '/'
    const result = getBackendUrl() + cleanedImageUrl;
    return result;
  }

  allegianceColor(allegiance: Allegiance): string {
    const color = getColor(allegiance);
    return color;
  }
}
