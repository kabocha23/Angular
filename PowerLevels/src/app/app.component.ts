import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  power: number;
  constructor() { }

  ngOnInit() {
    this.power = 1;
  }
}
