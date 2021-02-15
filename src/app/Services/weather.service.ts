import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'c855d48a1407931428c1d7f302f4fc68';
  url = 'http://api.openweathermap.org/data/2.5/group?id=';

  constructor(private httpClient:HttpClient) {}
  
  getWeatherDetails(cityCdes: any[]):Observable<any>{

    let codes="";

    cityCdes.forEach((element) => {

      codes += element +",";

    });

    return this.httpClient.get(this.url + codes + "&units=metric&appid=" + this.apiKey);

  }
 
}
