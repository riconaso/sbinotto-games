import { Component, OnInit } from '@angular/core';
import { Gioco } from 'src/app/models/gioco.model';
import { GiocoService } from 'src/app/services/gioco.service';

@Component({
  selector: 'app-giochi-list',
  templateUrl: './giochi-list.component.html',
  styleUrls: ['./giochi-list.component.scss']
})
export class GiochiListComponent implements OnInit{
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
