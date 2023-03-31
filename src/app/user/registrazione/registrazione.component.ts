import { CustomerValidator } from './../customValidators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']

})
export class RegistrazioneComponent implements OnInit{

  selectedCities: string[] = [];
  constructor(private config: PrimeNGConfig){}
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
    data: new FormControl('', Validators.required),
    nickName: new FormControl('', Validators.required),
    via: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    piattaforma: new FormControl('', Validators.required),
    accetto: new FormControl('', Validators.requiredTrue)
  },
  [CustomerValidator.MatchValidator('password', 'ripetiPassword')]
  );

  onSubmit(){
    console.log(this.form.value);
  }

}

