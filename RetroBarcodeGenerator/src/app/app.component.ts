import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  RandomColor: any[] = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "Darkblue", "DarkCyan", "DarkGoldenRoad", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid"];

  styleIt: any[]= [
    this.RandomColor[Math.floor(Math.random()*(this.RandomColor.length))+1],
    this.RandomColor[Math.floor(Math.random()*(this.RandomColor.length))+1],
    this.RandomColor[Math.floor(Math.random()*(this.RandomColor.length))+1],
    this.RandomColor[Math.floor(Math.random()*(this.RandomColor.length))+1],
    this.RandomColor[Math.floor(Math.random()*(this.RandomColor.length))+1],
    this.RandomColor[Math.floor(Math.random()*(this.RandomColor.length))+1],
  ]
}
