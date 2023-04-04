import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Gioco } from './../../models/gioco.model';
import { GiocoService } from 'src/app/services/gioco.service';
import { first, take } from 'rxjs';
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
giochiPerPagina = 4;

constructor(private giocoService: GiocoService){}


ngOnInit(): void {
    this.prendiGiochi();
  }

  ngOnDestroy(): void {
    console.log('utente uscito dal componente')
  }

  prendiGiochi(){
    this.giocoService.getGioco().pipe(first()).subscribe({
      next: (res) => {
        this.giochi = res;
        this.giochiTotali = res.length;
        if(this.pag == 'tendenza'){
          this.giochi = res.filter(gioco => gioco.tendenza).slice(0,20);
          this.giochiTotali = res.filter(gioco => gioco.tendenza).slice(0,20).length;// Cosi è dinamico e cambia il numero delle pagine in base ai giochi
        }
        if(this.pag == 'home'){
          this.giochi = this.giochi.sort((a,b)=> b._id - a._id).slice(0,4);
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
