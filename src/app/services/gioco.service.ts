import { Injectable } from '@angular/core';
import { Gioco } from '../models/gioco.model';
import { GIOCHI } from '../mocks/giochi.mock';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GiocoService {

  constructor() { }

  getGioco(): Observable<Gioco[]> {
    return of (GIOCHI);
  }

  getGiochi(id: number): Observable<Gioco> {
    const gioco = GIOCHI.find(gioco => gioco._id === id);
    return of (gioco);

  }
}
