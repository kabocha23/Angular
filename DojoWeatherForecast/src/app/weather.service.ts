import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { CityWeather } from './city-weather';
import 'rxjs/add/operator/map';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }
//: Observable<CityWeather>
  retrieveCityWeather(id: number) {
    console.log(id);
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&appid=82c1e2137fbe4018eec316950378e2fb`)
      .map( data => data.json())
      .toPromise();
  }
// API call for Chicago:
// http://api.openweathermap.org/data/2.5/weather?id=4887398&units=imperial&appid=82c1e2137fbe4018eec316950378e2fb
}
