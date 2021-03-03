import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  API_ENDPOINT : string;
  API_KEY : string;
  CACHE_KEY: string;

  constructor() {
    this.API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/group?id=';
    this.API_KEY = environment.OPENWEATHER_CONFIG.APIKEY;
    this.CACHE_KEY = 'httpCache';
  }
}
