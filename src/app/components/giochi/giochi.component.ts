import { Component, OnInit } from '@angular/core';
import { Gioco } from 'src/app/models/gioco.model';
import { GiocoService } from 'src/app/services/gioco.service';

@Component({
  selector: 'app-giochi',
  templateUrl: './giochi.component.html',
  styleUrls: ['./giochi.component.scss']
})
export class GiochiComponent implements OnInit{
  giochi: Gioco[];

  constructor(private giocoService: GiocoService){};


  ngOnInit(): void {
   this.giocoService.getGioco().subscribe({
    next: (response) =>{
      this.giochi = response;
    },
    error: (error) =>{
      console.log(error);
    }
   })
  }

}
