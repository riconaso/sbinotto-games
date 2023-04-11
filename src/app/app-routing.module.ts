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

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'giochi', component: GiochiComponent, children: [
    {path: 'dettaglio/:titolo/:_id', component:DetailComponent},
    { path: 'nuovo-gioco', component: NewGiochiComponent},
    {path: '', pathMatch: 'full', component: GiochiListComponent},
  ]},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'tendenza', component: TendenzaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
