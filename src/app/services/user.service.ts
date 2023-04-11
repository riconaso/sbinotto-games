import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  datiUtente = new ReplaySubject;
  apiBaseUrl = 'api/users';
  userRole = new ReplaySubject;

  constructor(private htttp: HttpClient) { }

  insertUser(user: any): Observable<any>{
    return this.htttp.post<any>(`${this.apiBaseUrl}/signup`, user);
  }
}
