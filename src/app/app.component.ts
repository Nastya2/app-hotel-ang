import { Component, ViewEncapsulation } from '@angular/core';
import { widgetData$, IData } from './data/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  public info: IData[];
  public hotel: IData;

  ngOnInit() {
    this.getData();
  }

  private getData() {
    widgetData$.subscribe((res) => {
      this.info = res;
      this.getInfoHotel(res[0]);
    });
  }

  public getInfoHotel(data) {
    this.hotel = data;
  }

}
