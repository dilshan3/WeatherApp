import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorsService } from './errors.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private httpClient: HttpClient,
    private errorsService: ErrorsService) { }
  
  getCityDetails():Observable<any>{
    let cities: Observable<any>;

    cities = this.httpClient.get('../assets/cities.json').
    pipe(
      catchError(this.errorsService.handleError)
    );

    return cities;
  }
}
