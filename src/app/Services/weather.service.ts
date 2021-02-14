import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'c855d48a1407931428c1d7f302f4fc68';
  url;

  constructor(private http:HttpClient) { 
    this.url='http://api.openweathermap.org/data/2.5/group?id=';
  }

  
  getWeatherDetails(cityCde: string):any{

    let weatherData;

    this.http.get(this.url+cityCde+'&units=metric&appid='+this.apiKey).
      subscribe(data =>{
      weatherData = data;
      console.log(weatherData);
    });

    return weatherData;

  }
  
  
}
