import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private coreAPI = environment.coreAPI;

  constructor(
    private _http: HttpClient,
  ) { }

  getUsers(): Observable<any> {
    return this._http.get(`${this.coreAPI}/users`);
  }

  getUser(id: string): Observable<any> {
    return this._http.get(`${this.coreAPI}/users/${id}`);
  }

  updateUser(id: string, data: any): Observable<any> {
    return this._http.put(`${this.coreAPI}/users/${id}`, data);
  }

  deleteUsers(): Observable<any> {
    return this._http.delete(`${this.coreAPI}/users`);
  }

  addUser(data: any): Observable<any> {
    return this._http.post(`${this.coreAPI}/users`, data);
  }

}
