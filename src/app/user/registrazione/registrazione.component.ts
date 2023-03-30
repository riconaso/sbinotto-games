import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {

  form = new FormGroup({
    nome: new FormControl('',Validators.required),
    cognome: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
    nickName: new FormControl('', Validators.required),
    via: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl('', Validators.requiredTrue)
  })

  onSubmit(){
    console.log(this.form.value);
  }

}
