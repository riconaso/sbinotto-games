import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gioco } from 'src/app/models/gioco.model';
import { GiocoService } from 'src/app/services/gioco.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  gioco: Gioco;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private giocoService: GiocoService
  ){}

  ngOnInit(): void {
    this.onGetGioco();
  }

  onGetGioco(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.giocoService.getGiochi(id).subscribe({
      next: (res) => {
        this.gioco = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onGetGioco2(): void {
    this.activatedRoute.params.subscribe((parametriUrl) => {
      const id = parametriUrl['_id'];


      this.giocoService.getGiochi(id).subscribe({
        next: (res) => {
          this.gioco = res;
        },
        error: (error) => {
          console.log(error);
        }
      })
    })
  }
}
