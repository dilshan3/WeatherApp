import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { ConstantService } from './constant.service';

const URL_STRING =  "&units=metric&appid=";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "";
  url = "";
  cacheKey = "";
  
  private cache: Observable<any>;

  constructor(private httpClient:HttpClient, 
    public constantService:ConstantService){
    this.url = this.constantService.API_ENDPOINT;
    this.apiKey = this.constantService.API_KEY;
    this.cacheKey = this.constantService.CACHE_KEY;
  }
  
  getWeatherDetails(cityCdes: any[]):Observable<any>{
    let codes = "";
    let fullUrl = "";
    let cityWeathers;

    cityCdes.forEach((element) => {
      codes += element + ",";
    });

    fullUrl = fullUrl.concat(this.url, codes, URL_STRING, this.apiKey); 

    cityWeathers = this.httpClient.get(fullUrl)
    .pipe(
      catchError(this.handleError)
    );

    cityWeathers.subscribe(data => {
      localStorage[this.cacheKey] = JSON.stringify(data);
    });

    cityWeathers = cityWeathers.pipe(
      startWith(JSON.parse(localStorage[this.cacheKey] || '[]'))
    );

    console.log(cityWeathers);
    return cityWeathers;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage); 
  }
}    
