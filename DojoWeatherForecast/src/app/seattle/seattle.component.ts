import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
import { CityWeather } from './../city-weather'


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  id;
  cityName;
  humidity;
  temperatureAvg;
  temperatureLow;
  temperatureHigh;
  status;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.id = this._weatherService.retrieveCityWeather(5809844)
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
