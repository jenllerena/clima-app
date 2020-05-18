import {Component, OnInit} from '@angular/core';
import {WeatherService} from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  weatherData: any;
  temperature;
  icon;
  cityName;
  country;
  feelslLike;
  pressure; humidity;
  description;
  tempMin;
  tempMax;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {

  }

  getWeather(cityName) {
    if (!cityName) {
      alert("ingrese una ciudad")
      return;
    }
    console.log(cityName)
    this.weatherService.getWeather(cityName)
      .subscribe(
        res => {
          this.weatherData = res
          this.saveData(res);
        },
        error1 => alert("No se encontró informacion")
      );
  }

  saveData = (data) => {
    this.temperature = Math.round(data.main.temp);
    this.feelslLike = Math.round(data.main.feels_like);
    this.tempMin = data.main.temp_min;
    this.tempMax = data.main.temp_max;
    this.description = data.weather[0].description;
    this.pressure = data.main.pressure;
    this.humidity = data.main.humidity;
    this.cityName = data.name;
    this.country = data.sys.country;
    this.icon = data.weather[0].icon;
  }

  getIcon(id) {
    var url = `http://openweathermap.org/img/wn/${id}@2x.png`
    return url;
  }

  createIcon = () => {
    const url = this.getIcon(this.icon);
    const image = document.getElementById('img-icon');
    image.setAttribute('src', url);
  }

  searchByCity(city: HTMLInputElement) {
    this.getWeather(city.value);
    city.value = '';

    return false;
  }
}
