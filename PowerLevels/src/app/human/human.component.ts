import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit, OnChanges {
  @Input() power;
  constructor() { }

  ngOnChanges(){
    this.power *= 1;
  }

  ngOnInit() {
  }

}
