import { Component, OnInit } from '@angular/core';
import { Gioco } from 'src/app/models/gioco.model';
import { GiocoService } from 'src/app/services/gioco.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  giochi: Gioco[];
  nome: string;
  email: string;

 constructor(
  private giocoService: GiocoService,
  private userService: UserService,
  ){};



  ngOnInit(): void {
    this.prendiGiochi();
    this.prendiDatiUtente();

    }

    prendiDatiUtente(){
      this.userService.datiUtente.subscribe((res: any) =>{
        localStorage.setItem('nome', res.nome);
        localStorage.setItem('email', res.email);
      });

      if(localStorage.getItem('nome')){
        this.nome = localStorage.getItem('nome');
        this.email = localStorage.getItem('email');
      }
    }

    closeModal(){
      localStorage.removeItem('nome');
      localStorage.removeItem('email');
      //localStorage.clear();

      this.nome = '';
      this.email = '';
    }


    prendiGiochi(){
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

