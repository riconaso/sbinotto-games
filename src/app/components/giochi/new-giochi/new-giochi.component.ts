import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { GiocoService } from 'src/app/services/gioco.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-new-giochi',
  templateUrl: './new-giochi.component.html',
  styleUrls: ['./new-giochi.component.scss'],
  providers: [MessageService]
})
export class NewGiochiComponent {
  giocoInserito: any;

  form = new FormGroup({
    titolo: new FormControl('', Validators.required),
    descrizione: new FormControl('', Validators.required),
    imaggine: new FormControl('', Validators.required),
    prezzo: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
    tendenza: new FormControl(false),
    pubblicato: new FormControl(false),
  })

  Editor = ClassicEditorBuild;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'codeBlock',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
};


  constructor(
    private giocoService: GiocoService,
    private router: Router,
    private modal: NgbModal,
    private messageService: MessageService
    ){}

  onSubmit(){
   // console.log(this.form.value)
   const gioco = this.form.value;
   this.giocoService.insertGioco(gioco).pipe(take(1)).subscribe({
    next: (res) => {
      console.log(res);
      this.giocoInserito = res;
      this.messageService.add({severity:'success', summary:'completato', detail:'gioco caricato correttamente', life: 3000})

    },
    error: (err) => {
      console.log(err);
    },
   });
  }



  closeModal() {
    this.giocoInserito = '';
    this.router.navigate(['giochi']);
  }

  onNewRecipe() {
    this.giocoInserito = '';
    this.form.patchValue({
      titolo: '',
      descrizione: '',
      imaggine: '',
      prezzo: '',
      data: '',
      tendenza: false,
      pubblicato: false,


    })
  }

  open(content: any, titolo?: string) {
    let title = titolo;
    this.modal.open(content, { ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) => {
      this.onNewRecipe();
    }).catch((res) => {
      this.closeModal();
    });
  }
}
