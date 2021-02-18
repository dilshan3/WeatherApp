import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../Services/weather.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-view-weather',
  templateUrl: './view-weather.component.html',
  styleUrls: ['./view-weather.component.css']
})

export class ViewWeatherComponent implements OnInit {
  cityCodes: any= [];
  data: any=[];
  currentWeather: any[];
  showSpinner: boolean = true;
  
  constructor(private httpClient: HttpClient, 
    private weatherservice: WeatherService, 
    public authService: AuthService) {}

  ngOnInit(): void {
    this.httpClient.get('../assets/cities.json').subscribe(data => {
      this.data = data;
      this.getCities();
      this.getCurrentWeather();
    });
  }

  getCities(){
    if(this.data){
      for(let tempCity of this.data.List){
        this.cityCodes.push(tempCity.CityCode);
      }
    }
  }

  getCurrentWeather(){
    if(this.authService.isAuthenticated$){
      console.log(this.authService.user$);
      this.weatherservice.getWeatherDetails(this.cityCodes).subscribe((data) => {
        this.currentWeather = data.list;
        this.showSpinner = false;
      });
    }     
  }
}  

