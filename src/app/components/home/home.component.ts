import { Component, OnInit } from '@angular/core';
import { Gioco } from 'src/app/models/gioco.model';
import { GiocoService } from 'src/app/services/gioco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  giochi: Gioco[];


 constructor(private giocoService: GiocoService){};



  ngOnInit(): void {
    this.giocoService.getGioco().subscribe({
      next: (response) =>{
        this.giochi = response;
        this.giochi = this.giochi.sort((a,b) => b._id - a._id).slice(0,8);




      },
      error: (error) =>{
        console.log(error);
      }
    })
  }




}
