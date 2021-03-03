import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../Services/weather.service';
import { CityService } from '../../Services/city.service';
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
  
  constructor(private weatherservice: WeatherService, 
    public authService: AuthService,
    private cityService: CityService) {}

  ngOnInit(): void {
    this.data = this.cityService.getCityDetails().subscribe(data => {
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
    let timeDiff: any;

    timeDiff = this.weatherservice.getTimeDiff();

    if(timeDiff < 5){
      if(this.weatherservice.checkCache(this.cityCodes)){
        this.currentWeather = this.weatherservice.getFromCache();
        this.showSpinner = false;
      }
      else{
        this.weatherservice.getWeatherDetails(this.cityCodes).subscribe((data) => {
          this.currentWeather = data.list;
          this.showSpinner = false;
        }); 
      }
    }
    else{
      this.weatherservice.getWeatherDetails(this.cityCodes).subscribe((data) => {
        this.currentWeather = data.list;
        this.showSpinner = false;
      }); 
    }
  }
}  

