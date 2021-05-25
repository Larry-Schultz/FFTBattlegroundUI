import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnChanges} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { getColor } from '../../util/colorsetter';
import { EventWebSocketAPI } from '../../util/websocketapi';
import { getBackendUrl } from '../../util/getbackendurl';
import { SkillType, Allegiance, PlayerSkill, SkillCategory } from 'src/app/model/playerRecord';
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
  @ViewChild('lineChart', {static: false}) lineChartElement: ElementRef;
  playerData: PlayerData;

  playerList: string[];
  playerName: string = null;
  currentSelectBoxSelection: string;

  chartData: MyChartData = null;

  public constructor(private playerRecordService: PlayerDataService, private playerListService: PlayerListService,
              private playerBalanceHistoryService: PlayerBalanceHistoryService, private router: Router,
              private activatedRoute: ActivatedRoute, private eventWebSocketAPI: EventWebSocketAPI ) {
    this.activatedRoute.params.subscribe(params => {
      this.playerName = params.player;
    });
  }

  public ngOnInit(): void {
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
      this.router.navigateByUrl('/player/' + playerName);
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

  public isSkillTypeUser(skillType: SkillType): boolean {
    const cleanedSkillType = skillType as SkillType;
    return cleanedSkillType === SkillType.USER;
  }

  public getFullImageUrl(imageUrl: string): string {
    const cleanedImageUrl = imageUrl.replace('/', ''); // apparently only removes the first '/'
    const result = getBackendUrl() + cleanedImageUrl;
    return result;
  }

  public allegianceColor(allegiance: Allegiance): string {
    const color = getColor(allegiance);
    return color;
  }

  public getSkillBonusDescriptionFromExistingSkills(skillBonus: string): string {
    const matchingSkill: PlayerSkill = this.getPlayerSkillBySkillName(skillBonus);

    let description = null
    if (matchingSkill) {
      description = matchingSkill.metadata;
    }

    return description;
  }

  public hasSkillCooldowns(): boolean {
    const playerUserSkillsWithCooldown: PlayerSkill[] = this.getCooldownPlayerSkillsList(this.playerData.playerRecord.playerSkills);
    const result = playerUserSkillsWithCooldown.length > 0;
    return result;
  }

  public getCooldownString(userSkill: PlayerSkill): string {
    let newCooldownString = ''

    if (userSkill.cooldown >= 4) {
      newCooldownString = '(cannot use)';
    } else if (userSkill.cooldown === 3) {
      newCooldownString = '(-4 EXP, -10 priority)';
    } else if (userSkill.cooldown === 2) {
      newCooldownString = '(-2 EXP -5 priority)';
    } else if (userSkill.cooldown === 1) {
      newCooldownString = '(-1 EXP, -3 priority)';
    }

    return newCooldownString;
  }

  public getCooldownPlayerSkillsList(userSkills: PlayerSkill[]): PlayerSkill[] {
    const playerUserSkillsWithCooldown: PlayerSkill[] = userSkills
    .filter((skill: PlayerSkill): boolean => {
      return skill.skillType === SkillType.USER;
    }).filter((skill: PlayerSkill): boolean => {
      return skill.cooldown && skill.cooldown > 0;
    }).sort((playerSkill1: PlayerSkill, playerSkill2: PlayerSkill): number => {
      // reverse order
      if (playerSkill1.cooldown > playerSkill2.cooldown) {
        return -1;
      } else if (playerSkill1.cooldown === playerSkill2.cooldown) {
        return 0;
      } else if (playerSkill1.cooldown < playerSkill2.cooldown) {
        return 1;
      }

      return -1;
    });

    return playerUserSkillsWithCooldown;
  }

  public getColorForSkill(playerSkill: PlayerSkill): string {
    if (playerSkill.skillCategory === SkillCategory.ELITE_MONSTER) {
      return 'dark blue';
    } else if (playerSkill.skillCategory === SkillCategory.STRONG_MONSTER) {
      return 'blue';
    } else if (playerSkill.skillCategory === SkillCategory.MONSTER) {
      return 'light blue';
    } else if (playerSkill.skillCategory === SkillCategory.LEGENDARY) {
      return 'gold';
    } else if (playerSkill.skillCategory === SkillCategory.EQUIPMENT) {
      return 'brown';
    } else if (playerSkill.skillCategory === SkillCategory.ENTRY) {
      return 'black';
    } else if (playerSkill.skillCategory === SkillCategory.JOB) {
      return 'purple';
    } else if (playerSkill.skillCategory === SkillCategory.SUPPORT) {
      return 'white';
    } else if (playerSkill.skillCategory === SkillCategory.REACTION) {
      return 'yellow';
    } else if (playerSkill.skillCategory === SkillCategory.MOVEMENT) {
      return 'red';
    }

    return null;
  }

  public getColorForSkillByName(skillName: string): string {
    const matchingSkill = this.getPlayerSkillBySkillName(skillName);

    let result = null;
    if (matchingSkill) {
      result = this.getColorForSkill(matchingSkill);
    }

    return result;
  }

  public isSkillBonusAlsoClassBonus(skillName: string): boolean {
    const playerSkill: PlayerSkill = this.getPlayerSkillBySkillName(skillName);

    const result = playerSkill && playerSkill.skillCategory != null && playerSkill.skillCategory !== SkillCategory.NORMAL;
    return result;
  }

  public prestigeSkills(): PlayerSkill[] {
    const result: PlayerSkill[] = this.playerData.playerRecord.playerSkills.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillType === SkillType.PRESTIGE;
    });

    return result;
  }

  public userSkills(): PlayerSkill[] {
    const result: PlayerSkill[] = this.playerData.playerRecord.playerSkills.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skillType === SkillType.USER;
    });

    return result;
  }

  protected getPlayerSkillBySkillName(skillName: string): PlayerSkill {
    const matchingSkills: PlayerSkill[] = this.playerData.playerRecord.playerSkills.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skill === skillName;
    });

    let result: PlayerSkill;
    if (matchingSkills && matchingSkills.length > 0) {
      result = matchingSkills[0];
    } else {
      result = null;
    }

    return result;
  }
}
