import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // highlight(id) {
  //   var element = document.getElementById(id);
  //   element.class = (element.class == "opacityClicked") ? "opacityDefault" : "opacityClicked";
  // }

  currentTime = new Date();
  lastTimeZoneSelected = null;

  getDate(timezone) {
    this.currentTime = new Date();
    if (timezone === 'MST') {
      this.currentTime.setHours(this.currentTime.getHours() + 1);
    } else if (timezone === 'CST') {
      this.currentTime.setHours(this.currentTime.getHours() + 2);
    } else if (timezone === 'EST') {
      this.currentTime.setHours(this.currentTime.getHours() + 3);
    }
    this.lastTimeZoneSelected = timezone;
  }

}
