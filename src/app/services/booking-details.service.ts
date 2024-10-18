import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  private coreAPI = environment.coreAPI

  constructor(
    private _http: HttpClient,
  ) { }



}
