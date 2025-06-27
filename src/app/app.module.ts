import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2CompleterModule } from 'ng2-completer';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { TabsModule, ModalModule, BsDropdownModule } from 'ngx-foundation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { NgOrdinalPipeModule } from 'angular-pipes';
import { CountdownModule } from 'ngx-countdown';
import { GaugeModule } from 'angular-gauge';

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
import { BotlandDisplayComponent } from './pages/botland/component/botlanddisplay/botlanddisplay.component';
import { BotlandTableComponent } from './pages/botland/component/botlandtable/botlandtable.component';
import { BotlandHistoricalLeaderboardComponent } from './pages/botland/component/botlandhistoricalleaderboard/botlandhistoricalleaderboard.component';
import { BotlandwinnersComponent } from './pages/botland/component/botlandwinners/botlandwinners.component';
import { TournamentTrackerStarsComponent } from './pages/live/components/tournamenttrackerstars/tournamenttrackerstars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleBotLeaderboardDataComponent } from './pages/bot/components/singlebotleaderboarddata/singlebotleaderboarddata.component';
import { BotxmlComponent } from './pages/bot/components/botxml/botxml.component';
import { GeneFileComponent } from './pages/genefile/genefile.component';
import { TournamentTrackerUnitItemComponent } from './pages/live/components/tournamenttrackerunititem/tournamenttrackerunititem.component';
import { FoundationGridContainerComponent } from './util/Foundation/components/foundationgridcontainer/foundationgridcontainer.component';
import { FoundationGridYComponent } from './util/Foundation/components/foundationgridy/foundationgridy.component';
import { FoundationGridXComponent } from './util/Foundation/components/foundationgridx/foundationgridx.component';
import { FoundationcellComponent } from './util/Foundation/components/foundationcell/foundationcell.component';
import { MustadioDataComponent } from './pages/live/components/mustadiodata/mustadiodata.component';
import { PhaseComponent } from './pages/live/components/phase/phase.component';
import { MemeTournamentSettingsComponent } from './pages/live/components/meme-tournament-settings/meme-tournament-settings.component';
import { BotLeaderboardTableComponent } from './pages/botleaderboard/components/bot-leaderboard-table/bot-leaderboard-table.component';
import { OptionsComponent } from './pages/options/options.component';
import { MusicOptionsComponent } from './pages/options/component/music-options/music-options.component';
import { PlayerOptionsComponent } from './pages/options/component/player-options/player-options.component';
import { PrimaryPlayerOptionComponent } from './pages/options/component/player-options/components/primary-player-option/primary-player-option.component';
import { FavoritePlayerOptionComponent } from './pages/options/component/player-options/components/favorite-player-option/favorite-player-option.component';
import { PlayerOptionSelectorComponent } from './pages/options/component/player-options/components/player-option-selector/player-option-selector.component';
import { FavoritePlayerStarComponent } from './fragments/favorite-player-star/favorite-player-star.component';
import { LivePageOptionsComponent } from './pages/options/component/live-page-options/live-page-options.component';
import { TeamValueComponent } from './pages/live/components/team-value/team-value.component';
import { ActivePortraitsComponent } from './pages/active-portraits/active-portraits.component';
import { ActiveMapsComponent } from './pages/active-maps/active-maps.component';
import { LivePageStatusComponent } from './fragments/menu/components/live-page-status/live-page-status.component';
import { PlayerListAutocompleteComponent } from './pages/playerrecord/components/player-list-autocomplete/player-list-autocomplete.component';
import { PrimaryFavoritePlayerListComponent } from './pages/playerrecord/components/primary-favorite-player-list/primary-favorite-player-list.component';
import { PlayerRecordHeaderComponent } from './pages/playerrecord/components/player-record-header/player-record-header.component';
import { PlayerRecordCoreComponent } from './pages/playerrecord/components/player-record-core/player-record-core.component';
import { PlayerRecordChartComponent } from './pages/playerrecord/components/player-record-chart/player-record-chart.component';
import { PlaylistSongCountGraphComponent } from './pages/music-list/components/playlist-song-count-graph/playlist-song-count-graph.component';
import { LoadingPhaseComponent } from './pages/live/components/phase/components/loading-phase/loading-phase.component';
import { MatchPhaseComponent } from './pages/live/components/phase/components/match-phase/match-phase.component';
import { FightPhaseComponent } from './pages/live/components/phase/components/fight-phase/fight-phase.component';
import { BettingPhaseComponent } from './pages/live/components/phase/components/betting-phase/betting-phase.component';
import { ResultsPhaseComponent } from './pages/live/components/phase/components/results-phase/results-phase.component';


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
    BotlandComponent, MatchHeightDirective, TournamentTrackerComponent, StacktraceComponent,
    UnitprofileComponent, BotComponent, BotlandDisplayComponent, BotlandTableComponent, BotlandHistoricalLeaderboardComponent,
    BotlandwinnersComponent, TournamentTrackerStarsComponent, SingleBotLeaderboardDataComponent, BotxmlComponent,
    GeneFileComponent, TournamentTrackerUnitItemComponent, FoundationGridContainerComponent, FoundationGridYComponent,
    FoundationGridXComponent, FoundationcellComponent, MustadioDataComponent, PhaseComponent, MemeTournamentSettingsComponent,
    BotLeaderboardTableComponent, OptionsComponent, MusicOptionsComponent, PlayerOptionsComponent, PrimaryPlayerOptionComponent,
    FavoritePlayerOptionComponent, PlayerOptionSelectorComponent, FavoritePlayerStarComponent, LivePageOptionsComponent, TeamValueComponent,
    ActivePortraitsComponent, ActiveMapsComponent, LivePageStatusComponent, PlayerListAutocompleteComponent, PrimaryFavoritePlayerListComponent,
    PlayerRecordHeaderComponent, PlayerRecordCoreComponent, PlayerRecordChartComponent, PlaylistSongCountGraphComponent, LoadingPhaseComponent, MatchPhaseComponent, FightPhaseComponent, BettingPhaseComponent, ResultsPhaseComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    Ng2CompleterModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,
    ChartsModule,
    DataTablesModule,
    TabsModule.forRoot(), ModalModule.forRoot(), BsDropdownModule.forRoot(),
    FontAwesomeModule,
    NgxLocalStorageModule.forRoot(),
    BrowserAnimationsModule,
    MatExpansionModule, MatDividerModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatAutocompleteModule, NgxMatColorPickerModule,
    NgOrdinalPipeModule,
    CountdownModule,
    GaugeModule.forRoot(),
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
    { provide: MAT_COLOR_FORMATS,
      useValue: NGX_MAT_COLOR_FORMATS
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
