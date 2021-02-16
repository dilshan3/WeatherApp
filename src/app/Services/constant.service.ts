import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  API_ENDPOINT : string;
  API_KEY : string;

  constructor() {
    this.API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/group?id=';
    this.API_KEY = 'c855d48a1407931428c1d7f302f4fc68'; 
  }
}
