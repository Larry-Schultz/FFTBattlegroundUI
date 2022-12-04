import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventWebSocketAPI } from '../../util/websocketapi';
import { PlayerSkill } from "src/app/model/PlayerRecord/PlayerSkill";
import { SkillType } from "src/app/model/PlayerRecord/SkillType";
import { PlayerDataService } from './service/playerdata.service';
import { PlayerData } from "./model/PlayerData";
import { BattleGroundEvent } from '../live/model/BattleGroundEvents/battlegroundevent';
import { PlayerOptionsLocalStorageServiceService } from '../options/service/PlayerOptionsLocalStorageService/player-options-local-storage-service.service';
import { skillCategoryOrderingMap } from './util/skillsUtils';

@Component({
  selector: 'app-playerrecord',
  templateUrl: './playerrecord.component.html',
  styleUrls: ['./playerrecord.component.scss']
})
export class PlayerRecordComponent implements OnInit {

  public playerData: PlayerData;

  public playerName: string = null;
  public refresh = false;
  public currentSelectBoxSelection: string;

  public userSkills: PlayerSkill[];
  public prestigeSkills: PlayerSkill[];

  public constructor(private readonly playerRecordService: PlayerDataService,
    private readonly activatedRoute: ActivatedRoute, private readonly eventWebSocketAPI: EventWebSocketAPI,
    private readonly playerOptionsLocalStorageServiceService: PlayerOptionsLocalStorageServiceService) {

    const primaryPlayer = this.playerOptionsLocalStorageServiceService.getPrimaryPlayer();
    this.activatedRoute.params.subscribe(params => {
      this.playerName = params.player;
      if(params.refresh) {
        this.refresh = params.refresh;
      }
      if(!params.player) {
        this.playerName = primaryPlayer?.player;
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
    }

  }

  public isPlayerPageRequest(): boolean {
    const result = !(this.playerName == null || typeof this.playerName === undefined);
    return result;
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
    const result: PlayerSkill[] = this.playerData.playerRecord.prestigeSkills.filter((playerSkill: PlayerSkill): boolean => {
      return this.playerData.prestigeSkills.includes(playerSkill.skill);
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
      const playerSkill1CategoryNumber: number = skillCategoryOrderingMap.get(playerSkill1.skillCategory);
      const playerSkill2CategoryNumber: number = skillCategoryOrderingMap.get(playerSkill2.skillCategory);

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
