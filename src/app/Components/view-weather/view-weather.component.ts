import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../Services/weather.service';


@Component({
  selector: 'app-view-weather',
  templateUrl: './view-weather.component.html',
  styleUrls: ['./view-weather.component.css']
})

export class ViewWeatherComponent implements OnInit {

  cityCodes: any= [];
  data: any=[];
  currentWeather: any[];

  constructor(private httpClient: HttpClient, private weatherservice: WeatherService) {

    

  }

  ngOnInit(): void {

    this.httpClient.get('../assets/cities.json').subscribe(data => {

      this.data = data;
      this.getCities();
      this.getCurrentWeather();

    });

    
  }

  getCities(){

    if(this.data){

      let tempArr: any=[];

      for(let tempCity of this.data.List){

        tempArr.push(tempCity.CityCode);
      }

      this.cityCodes =  tempArr;

      console.log(this.cityCodes);
    }
  }

  getCurrentWeather(){

    for(let i = 0; i < this.cityCodes.length; i++){

      console.log(this.weatherservice.getWeatherDetails(this.cityCodes[i]));

    }
    
  }

}  

