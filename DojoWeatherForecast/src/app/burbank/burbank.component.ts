import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
import { CityWeather } from './../city-weather'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  id;
  cityName;
  humidity;
  temperatureAvg;
  temperatureLow;
  temperatureHigh;
  status;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.id = this._weatherService.retrieveCityWeather(5331835)
    .then( weather => {
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temperatureAvg = weather.main.temp;
      this.temperatureHigh = weather.main.temp_max;
      this.temperatureLow = weather.main.temp_min;
      this.status = weather.weather[0].description;
      // console.log(this.weather);
    });
  }

}
