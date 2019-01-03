import { AppService } from './app.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
// import { widgetData$ } from './data/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  {

  public info: IData[];
  public hotel: IData;

  constructor() {}

  public getInfoHotel(data) {
    this.hotel = data;
  }

}
