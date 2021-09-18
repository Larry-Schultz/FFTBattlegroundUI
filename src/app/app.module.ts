import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Ng2CompleterModule } from 'ng2-completer';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { TabsModule, ModalModule, BsDropdownModule } from 'ngx-foundation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxLocalStorageModule} from 'ngx-localstorage';

import {
  InjectableRxStompConfig,
  RxStompService,
  rxStompServiceFactory,
} from '@stomp/ng2-stompjs';

import { myRxStompConfig } from './my-rx-stomp.config';

import { LivePageComponent } from './pages/live/livepage.component';
import { MenuComponent } from './fragments/menu/menu.component';
import { PlayerRecordComponent } from './pages/playerrecord/playerrecord.component';
import { appRoutingModule } from './router/router.module';
import { AppComponent } from './app.component';
import { MyLineChartComponent } from './fragments/mychartcomponent/mychartcomponent.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { BetentryComponent } from './pages/live/components/betentry/betentry.component';
import { FightEntryComponent } from './pages/live/components/fightentry/fightentry.component';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './pages/api/api.component';
import { AscensionComponent } from './pages/ascension/ascension.component';
import { ExpLeaderboardComponent } from './pages/expleaderboard/expleaderboard.component';
import { PlayerLeaderboardComponent } from './pages/playerleaderboard/playerleaderboard.component';
import { BotLeaderboardComponent } from './pages/botleaderboard/botleaderboard.component';
import { GlobalGilCountComponent } from './pages/globalgilcount/globalgilcount.component';
import { GlobalGilCountTabComponent } from './pages/globalgilcount/component/globalgilcounttab/globalgilcounttab.component';
import { AllegianceLeaderboardComponent } from './pages/allegianceleaderboard/allegianceleaderboard.component';
import { BotlandComponent } from './pages/botland/botland.component';
import { BotlandModalComponent } from './pages/botland/component/botlandmodal/botlandmodal.component';
import { TwitchembedComponent } from './pages/live/components/twitchembed/twitchembed.component';
import { MatchBlockComponent } from './pages/live/components/matchblock/matchblock.component';
import { TeamFightImagesComponent } from './pages/live/components/teamfightimages/teamfightimages.component';
import { FightImageComponent } from './pages/live/components/fightimage/fightimage.component';
import { TeamInfoComponent } from './pages/live/components/teaminfo/teaminfo.component';
import { UnitInfoComponent } from './pages/live/components/unitinfo/unitinfo.component';
import { MatchCountsComponent } from './pages/live/components/matchcounts/matchcounts.component';
import { SongComponent } from './pages/live/components/song/song.component';
import { NoticeComponent } from './pages/live/components/notice/notice.component';
import { SkilldropComponent } from './pages/live/components/skilldrop/skilldrop.component';
import { MapNumberComponent } from './pages/live/components/mapnumber/mapnumber.component';
import { MapImageComponent } from './pages/live/components/mapimage/mapimage.component';
import { GridsComponent } from './pages/live/components/grids/grids.component';
import { BetGridComponent } from './pages/live/components/betgrid/betgrid.component';
import { FightGridComponent } from './pages/live/components/fightgrid/fightgrid.component';
import { MatchHeightDirective } from './directives/matchheight.directive';
import { TwitchPlayerComponent } from './pages/live/components/twitchplayer/twitchplayer.component';
import { TournamentTrackerComponent } from './pages/live/components/tournamenttracker/tournamenttracker.component';
import { LivePageOptionsComponent } from './pages/live/components/livepageoptions/livepageoptions.component';
import { SkillColorLegendComponent } from './pages/playerrecord/components/skillcolorlegend/skillcolorlegend.component';
import { SkillCooldownComponent } from './pages/playerrecord/components/skillcooldown/skillcooldown.component';
import { ClassBonusComponent } from './pages/playerrecord/components/classbonus/classbonus.component';
import { SkillBonusComponent } from './pages/playerrecord/components/skillbonus/skillbonus.component';
import { PrestigeSkillsComponent } from './pages/playerrecord/components/prestigeskills/prestigeskills.component';
import { UserSkillsComponent } from './pages/playerrecord/components/userskills/userskills.component';
import { PlayerDataComponent } from './pages/playerrecord/components/playerdata/playerdata.component';
import { PlayerPortraitComponent } from './pages/playerrecord/components/playerportrait/playerportrait.component';
import { StacktraceComponent } from './pages/stacktrace/stacktrace.component';
import { UnitprofileComponent } from './pages/live/components/unitprofile/unitprofile.component';
import { BotComponent } from './pages/bot/bot.component';

@NgModule({
  declarations: [
    AppComponent,

    LivePageComponent, TeamFightImagesComponent, BetentryComponent, FightEntryComponent, TwitchembedComponent, MatchBlockComponent,
    TeamFightImagesComponent, FightImageComponent, TeamInfoComponent, UnitInfoComponent, NoticeComponent, MatchCountsComponent,
    SongComponent, SkilldropComponent, MapNumberComponent, MapImageComponent, GridsComponent, BetGridComponent, FightGridComponent,
    TwitchPlayerComponent,
    MenuComponent,
    PlayerRecordComponent, SkillColorLegendComponent, SkillCooldownComponent, ClassBonusComponent, SkillBonusComponent,
    PrestigeSkillsComponent, UserSkillsComponent, PlayerDataComponent, PlayerPortraitComponent,
    MyLineChartComponent,
    NotFoundComponent,
    MusicListComponent,
    ApiComponent,
    AscensionComponent,
    ExpLeaderboardComponent,
    PlayerLeaderboardComponent,
    BotLeaderboardComponent,
    GlobalGilCountComponent, GlobalGilCountTabComponent,
    AllegianceLeaderboardComponent,
    BotlandComponent, BotlandModalComponent, MatchHeightDirective, TournamentTrackerComponent, LivePageOptionsComponent, StacktraceComponent, UnitprofileComponent, BotComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    Ng2CompleterModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    DataTablesModule,
    TabsModule.forRoot(), ModalModule.forRoot(), BsDropdownModule.forRoot(),
    FontAwesomeModule,
    NgxLocalStorageModule.forRoot(),
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
