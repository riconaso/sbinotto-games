import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GiochiComponent } from './components/giochi/giochi.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { GiocoCardComponent } from './shared/gioco-card/gioco-card.component';
import { DetailComponent } from './components/giochi/detail/detail.component';
import { GiochiListComponent } from './components/giochi/giochi-list/giochi-list.component';
import { TendenzaComponent } from './components/tendenza/tendenza.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    GiochiComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    GiocoCardComponent,
    DetailComponent,
    GiochiListComponent,
    TendenzaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
