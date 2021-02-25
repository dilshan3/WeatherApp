import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { ConstantService } from './constant.service';
import { ErrorsService } from './errors.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

const URL_STRING =  "&units=metric&appid=";
const CACHE_DATE_KEY = 'cacheDate';
const CACHE_IDS = 'IDs'

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
    let cacheDate;
    let localStorageSize;

    cityCdes.forEach((element) => {
      codes += element + ",";
    });

    try{
      localStorageSize = localStorage.length;
    }catch(e){
      console.log('Error: ', e);
    }
    
    if(localStorageSize > 1){
      try{
        localStorage.setItem(CACHE_IDS, codes);
      }catch(e){
        console.log('Error: ', e);
      }
    }

    fullUrl = fullUrl.concat(this.url, codes, URL_STRING, this.apiKey); 

    cityWeathers = this.httpClient.get(fullUrl)
    .pipe(
      catchError(this.errorsService.handleError)
    );

    cityWeathers.subscribe((data) => {
      localStorage.setItem(this.cacheKey, JSON.stringify(data.list));
    });

    cacheDate = new Date();

    try{
      localStorage.setItem(CACHE_DATE_KEY, cacheDate);
    }catch(e){
      console.log('Error: ', e);
    }

    return cityWeathers;       
  } 
  
  getFromCache(): any[]{
    let cityWeathers;

    try{
      cityWeathers = JSON.parse(localStorage.getItem(this.cacheKey));
    }catch(e){
      console.log('Error: ', e);
    }
    
    return cityWeathers;
  }

  getTimeDiff(): number{
    let localStorageSize, timeDiff, cacheDate;

    try{
      localStorageSize = localStorage.length;
    }catch(e){
      console.log('Error: ', e);
    }
    
    if(localStorageSize > 2){
      try{
        cacheDate = new Date(localStorage.getItem(CACHE_DATE_KEY));
      }catch(e){
        console.log('Error: ', e);
      }

      let newDate = new Date();
      timeDiff = ((newDate.getTime() - cacheDate.getTime()) / 60000);
      console.log(timeDiff)
      return timeDiff;
    } 
  }

  checkCache(cityCodes: string[]): boolean{
    let cachedCities;
    let cityString = "";

    cityCodes.forEach((element) => {
      cityString += element + ",";
    });

    try{
      cachedCities = localStorage.getItem(CACHE_IDS);
    }catch(e){
      console.log('Error: ', e);
      return false;
    }

    if(cachedCities == cityString){
      return true;
    }
    else{
      try{
        localStorage.setItem(CACHE_IDS, cityString);
      }catch(e){
        console.log('Error: ', e);
        return false;
      }
      return false;
    }
  }
}  