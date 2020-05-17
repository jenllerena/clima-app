import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '0bed66976f50da0109ab596daeedb95f';
  url:string = '';
  constructor(private httpClient: HttpClient) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
   }

   getWeather(cityName){
     return this.httpClient.get(`${this.url}${cityName}&units=metric`);
   }
}
