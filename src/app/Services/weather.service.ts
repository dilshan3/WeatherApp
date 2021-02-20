import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { ConstantService } from './constant.service';
import { ErrorsService } from './errors.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

const URL_STRING =  "&units=metric&appid=";
const CACHE_DATE_KEY = 'cacheDate';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "";
  url = "";
  cacheKey = "";

  constructor(private httpClient:HttpClient, 
    public constantService:ConstantService,
    private errorsService: ErrorsService,
    protected lStorage: LocalStorage){
    this.url = this.constantService.API_ENDPOINT;
    this.apiKey = this.constantService.API_KEY;
    this.cacheKey = this.constantService.CACHE_KEY;
  }
  
  getWeatherDetails(cityCdes: any[]):any{
    let codes = "";
    let fullUrl = "";
    let cityWeathers: any;
    let cacheDate, localStorageSize, timeDiff;

    try{
      localStorageSize = localStorage.length;
    }catch(e){
      console.log('Error: ', e);
    }

    if(localStorageSize > 1){
      try{
        cacheDate = new Date(localStorage.getItem(CACHE_DATE_KEY));
      }catch(e){
        console.log('Error: ', e);
      }

      let newDate = new Date();
      timeDiff = ((newDate.getTime() - cacheDate.getTime()) / 6000);

      if(timeDiff < 5){
        this.lStorage.getItem(this.cacheKey).subscribe((data) => {
          cityWeathers = data;
          
        }, (e) => {
          console.log('Error: ', e);
        });

        return cityWeathers;
      }
    }
    else{
      let cityWeath;

      cityCdes.forEach((element) => {
        codes += element + ",";
      });

      fullUrl = fullUrl.concat(this.url, codes, URL_STRING, this.apiKey); 

      cityWeathers = this.httpClient.get(fullUrl)
      .pipe(
        catchError(this.errorsService.handleError)
      );

      cityWeathers.subscribe((data) => {
        cityWeath = data;
        this.lStorage.setItem(this.cacheKey, data).subscribe(() => {}, 
        (e) => {
          console.log(e)
        });
      });

      cacheDate = new Date();

      try{
        localStorage.setItem(CACHE_DATE_KEY, cacheDate);
      }catch(e){
        console.log('Error: ', e);
      }

      return cityWeathers;
    } 
  }    
}