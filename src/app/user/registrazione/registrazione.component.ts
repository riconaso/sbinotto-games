
import { CustomerValidator } from './../customValidators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrimeNGConfig} from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss'],


})
export class RegistrazioneComponent implements OnInit{
  utenteInserito: any;

  selectedCities: string[] = [];
  constructor(
    private config: PrimeNGConfig,
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal,

     ){}

     ngOnInit(): void {
    this.config.setTranslation({
      weak: 'povera',
      medium: 'media',
      strong: 'forte',
      passwordPrompt: 'scrivi una password'
    })
  }


  form = new FormGroup({
    nome: new FormControl('',Validators.required),
    cognome: new FormControl('', Validators.required),
    data: new FormControl('', ),
    nickName: new FormControl('', Validators.required),
    via: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    piattaforma: new FormControl('',),
    accetto: new FormControl('', Validators.requiredTrue)
  },
  [CustomerValidator.MatchValidator('password', 'ripetiPassword')]
  );

  onSubmit(){
    //console.log(this.form.value);
    // nome: this.form.value.nome,
    // email: this.form.value.email
    const user = this.form.value;
    this.userService.insertUser(user).pipe(take(1)).subscribe({
      next: (res) => {
        console.log(res);
        this.utenteInserito = res;

      },
      error: (err) => {
        console.log(err);
      }
    });

    this.userService.datiUtente.next(user);
    this.router.navigate(['home']);

  }

  open(content: any, titolo?:string){
    let title = titolo;

    this.modalService.open(content, { ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) =>{
      console.log('azione da eseguire')
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
    });
  }


}

