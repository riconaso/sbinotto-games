import { Injectable } from '@angular/core';
import { Gioco } from '../models/gioco.model';
import { GIOCHI } from '../mocks/giochi.mock';
import {Observable, ReplaySubject, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GiocoService {

  apiBaseUrl = 'api/giochi';

  testoCercato = new ReplaySubject;

  constructor(private http: HttpClient) { }

  getGioco(): Observable<Gioco[]> {
    //return of (GIOCHI);
    return this.http.get<Gioco[]>(`${this.apiBaseUrl}/`);
  }

  getGiochi(id: string): Observable<Gioco> {
    // const gioco = GIOCHI.find(gioco => gioco._id === id);
    // return of (gioco);
    return this.http.get<Gioco>(`${this.apiBaseUrl}/${id}`);

  }

  insertGioco(gioco: any): Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}/`, gioco);
  }

  // getGiochiTendenza(tendenza: number): Observable<Gioco>{
  //   const giocoInTendenza = GIOCHI.find(gioco => gioco.tendenza === tendenza);
  //   return of (giocoInTendenza);
  // }

  findGiochi(text: string): Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}/cerca/${text}`);
  }
}
