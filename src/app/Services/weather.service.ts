import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { ConstantService } from './constant.service';

const URL_STRING =  "&units=metric&appid=";
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "";
  url = "";
  private cache: Observable<any>;

  constructor(private httpClient:HttpClient, 
    public constantService:ConstantService){
    this.url = this.constantService.API_ENDPOINT;
    this.apiKey = this.constantService.API_KEY;
  }
  
  getWeatherDetails(cityCdes: any[]):Observable<any>{
    let codes = "";
    let fullUrl = "";

    cityCdes.forEach((element) => {
      codes += element + ",";
    });

    fullUrl = fullUrl.concat(this.url, codes, URL_STRING, this.apiKey); 

    return this.httpClient
    .get(fullUrl)
    .pipe(
      catchError(this.handleError)
    );
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
