import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { ConstantService } from './constant.service';
import { ErrorsService } from './errors.service';

const URL_STRING =  "&units=metric&appid=";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "";
  url = "";
  cacheKey = "";

  constructor(private httpClient:HttpClient, 
    public constantService:ConstantService,
    private errorsService: ErrorsService){
    this.url = this.constantService.API_ENDPOINT;
    this.apiKey = this.constantService.API_KEY;
    this.cacheKey = this.constantService.CACHE_KEY;
  }
  
  getWeatherDetails(cityCdes: any[]):Observable<any>{
    let codes = "";
    let fullUrl = "";
    let cityWeathers;

    // if(localStorage.getItem(this.cacheKey)){
    //   try{
    //     cityWeathers = cityWeathers.pipe(
    //       startWith(JSON.parse(localStorage.getItem(this.cacheKey) || '[]'))
    //     );
    //   }catch(e){
    //     console.log("Error: ",e);
    //   }
  
    //   console.log("asdass");
    //   return cityWeathers;
    // }

    cityCdes.forEach((element) => {
      codes += element + ",";
    });

    fullUrl = fullUrl.concat(this.url, codes, URL_STRING, this.apiKey); 

    cityWeathers = this.httpClient.get(fullUrl)
    .pipe(
      catchError(this.errorsService.handleError)
    );

    cityWeathers.subscribe(data => {
      try{
        localStorage.setItem(this.cacheKey, JSON.stringify(data));
      }catch(e){
        console.log("Error: ",e);
      }
      
    });

    try{
      cityWeathers = cityWeathers.pipe(
        startWith(JSON.parse(localStorage.getItem(this.cacheKey) || '[]'))
      );
    }catch(e){
      console.log("Error: ",e);
    }

    return cityWeathers;
  }
}    
