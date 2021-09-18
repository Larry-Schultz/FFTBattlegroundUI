import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnChanges} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventWebSocketAPI } from '../../util/websocketapi';
import { SkillType, PlayerSkill, SkillCategory } from 'src/app/model/playerRecord';
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
export class PlayerRecordComponent implements OnInit, AfterViewInit, OnChanges {

  protected static skillCategoryOrderingMap: Map<SkillCategory, number> = new Map<SkillCategory, number>([
    [SkillCategory.ELITE_MONSTER, 1], [SkillCategory.STRONG_MONSTER, 2], [SkillCategory.MONSTER, 3], [SkillCategory.JOB, 4],
    [SkillCategory.EQUIPMENT, 5], [SkillCategory.ENTRY, 6], [SkillCategory.MOVEMENT, 7], [SkillCategory.REACTION, 8],
    [SkillCategory.SUPPORT, 9], [SkillCategory.PRESTIGE, 10], [SkillCategory.LEGENDARY, 11], [SkillCategory.NORMAL, 12], 
    [SkillCategory.NONE, 13]
  ]);

  @ViewChild('lineChart', {static: false})
  public lineChartElement: ElementRef;

  public playerData: PlayerData;

  public playerList: string[];
  public playerName: string = null;
  public refresh = false;
  public currentSelectBoxSelection: string;
  public chartData: MyChartData = null;

  public userSkills: PlayerSkill[];
  public prestigeSkills: PlayerSkill[];

  public constructor(private playerRecordService: PlayerDataService, private playerListService: PlayerListService,
    private playerBalanceHistoryService: PlayerBalanceHistoryService, private router: Router,
    private activatedRoute: ActivatedRoute, private eventWebSocketAPI: EventWebSocketAPI) {
    this.activatedRoute.params.subscribe(params => {
      this.playerName = params.player;
      if(params.refresh) {
        this.refresh = params.refresh;
      }
    });
  }

  public ngOnInit(): void {
    if (this.isPlayerPageRequest()) {
      this.eventWebSocketAPI.subscribe<PlayerRecordComponent>(this.parseEvents, this);

      this.playerRecordService.find(this.playerName, this.refresh).subscribe(data => {
        this.playerData = data.data;
        this.userSkills = this.generateUserSkillsList();
        this.prestigeSkills = this.generatePrestigeSkillList();
      });

      this.playerBalanceHistoryService.find(this.playerName, 'api/players/balanceHistory', 10, 1).subscribe(data => {
        const title = 'Player balance based on past participated tournaments (data where available)';
        this.chartData = this.playerBalanceHistoryService.generateMyChartData(data.data, title);
      });
    }

  }

  public ngAfterViewInit(): void {
    this.playerListService.find().subscribe(data => {
        this.playerList = data.data;
      });
  }

  public ngOnChanges(): void  {

  }

  public isPlayerPageRequest(): boolean {
    const result = !(this.playerName == null || typeof this.playerName === undefined);
    return result;
  }

  public playerSearch(): void {
    const playerName = this.currentSelectBoxSelection.toString();
    if (playerName.length > 0) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigateByUrl('/player/' + playerName + '?refresh=true');
    }
  }

  public parseEvents(event: BattleGroundEvent, classRef: PlayerRecordComponent): void {
    switch (event.eventType) {
      case 'BETTING_BEGINS':
        classRef.reload();
        break;
      default:
        break;
    }

  }

  public reload(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.set('refresh', 'true');
    window.location.search = urlParams.toString();
  }

  public calculatePrestigeLevel(): number {
    let result = 0;
    if (this.prestigeSkills) {
      result = this.prestigeSkills.length;
    }

    return result;
  }

  protected generatePrestigeSkillList(): PlayerSkill[] {
    const result: PlayerSkill[] = this.playerData.playerRecord.playerSkills.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillType === SkillType.PRESTIGE;
    }).sort((playerSkill1: PlayerSkill, playerSkill2: PlayerSkill): number => {
      let sortResult = 0;
      if (playerSkill1.skill < playerSkill2.skill) {
        sortResult = -1;
      } else if (playerSkill1.skill > playerSkill2.skill) {
        sortResult = 1;
      }
      return sortResult;
    });

    return result;
  }

  protected generateUserSkillsList(): PlayerSkill[] { 
    const result: PlayerSkill[] = this.playerData.playerRecord.playerSkills.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillType === SkillType.USER;
    }).sort(this.sortPlayerSkillsByCategory);

    return result;
  }

  protected sortPlayerSkillsByCategory(playerSkill1: PlayerSkill, playerSkill2: PlayerSkill): number {
      const playerSkill1CategoryNumber: number = PlayerRecordComponent.skillCategoryOrderingMap.get(playerSkill1.skillCategory);
      const playerSkill2CategoryNumber: number = PlayerRecordComponent.skillCategoryOrderingMap.get(playerSkill2.skillCategory);

      let sortResult = 0;
      if (playerSkill1CategoryNumber < playerSkill2CategoryNumber) {
        sortResult = -1;
      } else if (playerSkill1CategoryNumber > playerSkill2CategoryNumber) {
        sortResult = 1;
      } else {
        if (playerSkill1.skill < playerSkill2.skill) {
          sortResult = -1;
        } else if (playerSkill1.skill > playerSkill2.skill) {
          sortResult = 1;
        }
      }

      return sortResult;
    }
}
