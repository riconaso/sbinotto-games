import { Component, DoCheck } from '@angular/core';
import  { faGamepad, faHouse,faBoxArchive, faUser, faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons' ;
import { faPlaystation, faXbox,  } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GiocoService } from 'src/app/services/gioco.service';
import { ReplaySubject } from 'rxjs';
// import  { faPlaystation }  from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck{

  faPlaystation  =  faPlaystation ;
  faXbox = faXbox;
  faGamepad = faGamepad;
  faHouse = faHouse;
  faBoxArchive =faBoxArchive;
  faUser = faUser;
  faPlus = faPlus;
  faMagnifyingGlass = faMagnifyingGlass;

  user: any;
  // testo = new ReplaySubject;
  ricerca: string = '';

  constructor(private router: Router, public authService: AuthService, private giocoService: GiocoService){}

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  risultato() {
    const currentRoute = this.router.url;
    if(currentRoute !== `/giochi/cerca/${this.ricerca}` ) {
      this.giocoService.testoCercato.next(this.ricerca);
      this.router.navigate([`/giochi/cerca/${this.ricerca}`]);
      this.ricerca = '';
    } else {
      this.giocoService.testoCercato.next(this.ricerca);
      this.router.navigate([`/giochi/cerca/${this.ricerca}`]);
      this.ricerca = '';
    }
  }
}
