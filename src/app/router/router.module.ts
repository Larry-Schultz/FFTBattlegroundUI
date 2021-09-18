import { Routes, RouterModule } from '@angular/router';

import { LivePageComponent } from '../pages/live/livepage.component';
import { PlayerRecordComponent } from '../pages/playerrecord/playerrecord.component';
import { NotFoundComponent } from '../pages/notfound/notfound.component';
import { MusicListComponent } from '../pages/music-list/music-list.component';
import { ApiComponent } from '../pages/api/api.component';
import { AscensionComponent } from '../pages/ascension/ascension.component';
import { ExpLeaderboardComponent } from '../pages/expleaderboard/expleaderboard.component';
import { PlayerLeaderboardComponent } from '../pages/playerleaderboard/playerleaderboard.component';
import { BotLeaderboardComponent } from '../pages/botleaderboard/botleaderboard.component';
import { GlobalGilCountComponent } from '../pages/globalgilcount/globalgilcount.component';
import { AllegianceLeaderboardComponent } from '../pages/allegianceleaderboard/allegianceleaderboard.component';
import { BotlandComponent } from '../pages/botland/botland.component';
import { StacktraceComponent } from 'src/app/pages/stacktrace/stacktrace.component';
import { BotComponent } from '../pages/bot/bot.component';

const routes: Routes = [
    { path: '', component: LivePageComponent },
    { path: 'player', component: PlayerRecordComponent },
    { path: 'player/', component: PlayerRecordComponent },
    { path: 'player/:player', component: PlayerRecordComponent },
    { path: 'music', component: MusicListComponent },
    { path: 'api', component: ApiComponent },
    { path: 'apidocs', component: ApiComponent },
    { path: 'ascension', component: AscensionComponent },
    { path: 'expLeaderboard', component: ExpLeaderboardComponent },
    { path: 'leaderboard', component: PlayerLeaderboardComponent },
    { path: 'playerLeaderboard', component: PlayerLeaderboardComponent },
    { path: 'botleaderboard', component: BotLeaderboardComponent },
    { path: 'gilCount', component: GlobalGilCountComponent },
    { path: 'allegianceLeaderboard', component: AllegianceLeaderboardComponent },
    { path: 'botland', component: BotlandComponent },
    { path: 'bot/:botName', component: BotComponent},
    { path: 'error/stacktrace/:id', component: StacktraceComponent},

    { path: '**', component: NotFoundComponent}
];

export const appRoutingModule = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
