import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { ResponeAPI } from '../interfaces/responeAPI';
import { RoomModel } from '../interfaces/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private coreAPI = environment.coreAPI;

  constructor(
    private _http: HttpClient,
  ) { }

  getRoomNumbers(): Observable<ResponeAPI<RoomModel[]>> {
    return this._http.get<ResponeAPI<RoomModel[]>>(`${this.coreAPI}/rooms/room-numbers`);
  }

}
