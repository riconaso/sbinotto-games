import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Gioco } from './../../models/gioco.model';
import { GiocoService } from 'src/app/services/gioco.service';
import { delay, first, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-gioco-card',
  templateUrl: './gioco-card.component.html',
  styleUrls: ['./gioco-card.component.scss']
})
export class GiocoCardComponent implements OnInit, OnDestroy {

@Input() pag: string;

giochiTotali: number;
giochi: Gioco[]
page = 1;
giochiPerPagina = 8;
loading = true;
ricercato: any;
ruolo: any;

constructor(
  private giocoService: GiocoService,
  private userService: UserService,
  ){}
  // this.userService.userRole.subscribe({
  //   next: res => this.ruolo = res
  // })


ngOnInit(): void {
    this.prendiGiochi();
    if(JSON.parse(localStorage.getItem('user')) != null){
      this.ruolo =JSON.parse(localStorage.getItem('user')).role;
    }
  }
  onGetUser(email): void{
    this.userService.getUser(email).pipe(take(1))
    .subscribe({
      next: res =>{
        this.ruolo=res.role;
      },
      error: err => console.log(err)
    })
   }

  ngOnDestroy(): void {
    console.log('utente uscito dal componente')
  }

  prendiGiochi(){
    this.giocoService.getGioco().pipe(
      // delay(4000),
      first()).subscribe({
      next: (res) => {
        if(this.pag === 'ricerca') {
          this.giocoService.testoCercato.subscribe({
            next: (res) => {
              this.ricercato = res;
              if(this.ricercato) {
                this.giocoService.findGiochi(this.ricercato).subscribe({
                  next: (res) => {
                    this.giochi = res;
                    this.loading = false;
                    this.giochiTotali = res.length;
                    console.log(res);
                  },
                  error: (err) => {
                    console.log(err);
                  }
                })
              }
            },
            error: (err) => {
              console.error(err);
            }
          });
        } else {
          this.giochi = res;
          this.loading = false;
          this.giochiTotali = res.length;
          if(this.pag == 'tendenza'){
            this.giochi = res.filter(gioco => gioco.tendenza).slice(0,20);
            this.giochiTotali = res.filter(gioco => gioco.tendenza).slice(0,20).length;// Cosi è dinamico e cambia il numero delle pagine in base ai giochi
          }
          if(this.pag == 'home'){
            this.giochi = this.giochi.sort((a,b)=> b._id - a._id).slice(0,8);
          }
        }
      },
      error: (error) => {
        console.log(error)
      }

    })

  }

  giochiInTendenza(){
    this.giocoService.getGioco().subscribe({
      next: (response) =>{
        this.giochi = response;
        // this.giochi = this.giochi.sort((a,b) => b.tendenza - a.tendenza).slice(0,4);
        this.giochi = this.giochi.filter(gioco => gioco.tendenza).slice(0,6);


      },
      error: (error) =>{
        console.log(error);
      }
     })
  }
paginate(event){
  event.page = event.page +1;
  this.page = event.page;
}



}
