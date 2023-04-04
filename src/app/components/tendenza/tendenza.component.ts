import { Component, OnInit } from '@angular/core';
import { Gioco } from 'src/app/models/gioco.model';
import { GiocoService } from 'src/app/services/gioco.service';

@Component({
  selector: 'app-tendenza',
  templateUrl: './tendenza.component.html',
  styleUrls: ['./tendenza.component.scss']
})
export class TendenzaComponent implements OnInit{

  giochi: Gioco[];



  constructor(private giocoService: GiocoService){};


  ngOnInit(): void {
   this.giocoService.getGioco().subscribe({
    next: (response) =>{
      this.giochi = response;
      // this.giochi = this.giochi.sort((a,b) => b.tendenza - a.tendenza).slice(0,4);
      this.giochi = this.giochi.filter(gioco => gioco.tendenza).slice(0,20);


    },
    error: (error) =>{
      console.log(error);
    }
   })
  }



}
