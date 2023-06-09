import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GiochiComponent } from './components/giochi/giochi.component';
import { GiochiListComponent } from './components/giochi/giochi-list/giochi-list.component';
import { DetailComponent } from './components/giochi/detail/detail.component';
import { TendenzaComponent } from './components/tendenza/tendenza.component';
import { RegistrazioneComponent } from './user/registrazione/registrazione.component';
import { NewGiochiComponent } from './components/giochi/new-giochi/new-giochi.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ResultComponent } from './components/giochi/result/result.component';
import { PlaystationComponent } from './components/playstation/playstation.component';
import { XBoxComponent } from './components/x-box/x-box.component';
import { NintendoComponent } from './components/nintendo/nintendo.component';
import { ProssimeUsciteComponent } from './components/prossime-uscite/prossime-uscite.component';
import { GiochiScontoComponent } from './components/giochi-sconto/giochi-sconto.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'giochi', component: GiochiComponent, children: [
    {path: 'dettaglio/:titolo/:_id', component:DetailComponent},
    { path: 'nuovo-gioco', component: NewGiochiComponent},
    {path: 'cerca/:text', component: ResultComponent},
    {path: '', pathMatch: 'full', component: GiochiListComponent},
  ]},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'tendenza', component: TendenzaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'playstation', component: PlaystationComponent},
  {path: 'x-box', component: XBoxComponent},
  {path: 'nintendo', component: NintendoComponent},
  {path: 'uscite', component: ProssimeUsciteComponent},
  {path: 'sconto', component: GiochiScontoComponent},
  {path: 'profilo', component: ProfileComponent, canActivate: [LoggedInGuard]},

  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
