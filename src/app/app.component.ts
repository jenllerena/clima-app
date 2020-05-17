import { Component, OnInit } from '@angular/core';
import {WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  weatherData:any;
  temperature;
 constructor(private weatherService:WeatherService){}
  ngOnInit(){
    
  }
  getWeather(cityName){
    console.log(cityName)
    this.weatherService.getWeather(cityName)
    .subscribe(
      res=>this.weatherData=res
    )
  }
  searchByCity(city:HTMLInputElement){
    this.getWeather(city.value);
    city.value = '';

    return false;
  }
}