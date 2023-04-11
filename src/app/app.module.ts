import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GiochiComponent } from './components/giochi/giochi.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { GiocoCardComponent } from './shared/gioco-card/gioco-card.component';
import { DetailComponent } from './components/giochi/detail/detail.component';
import { GiochiListComponent } from './components/giochi/giochi-list/giochi-list.component';
import { TendenzaComponent } from './components/tendenza/tendenza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrazioneComponent } from './user/registrazione/registrazione.component';
import { NewGiochiComponent } from './components/giochi/new-giochi/new-giochi.component';
import { LoginComponent } from './components/user/login/login.component';
import { ToastModule} from 'primeng/toast';


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
    RegistrazioneComponent,
    NewGiochiComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    CheckboxModule,
    ImageModule,
    FontAwesomeModule,
    ButtonModule,
    PaginatorModule,
    HttpClientModule,
    ToastModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
