import { Component } from '@angular/core';
import  { faGamepad, faHouse,faBoxArchive, faUser}  from '@fortawesome/free-solid-svg-icons' ;
import { faPlaystation, faXbox,  } from '@fortawesome/free-brands-svg-icons';
// import  { faPlaystation }  from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faPlaystation  =  faPlaystation ;
  faXbox = faXbox;
  faGamepad = faGamepad;ù
  faHouse = faHouse;
  faBoxArchive =faBoxArchive;
  faUser = faUser;


}
