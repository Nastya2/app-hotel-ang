// import { AppService } from './../app.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-cart-degree',
  templateUrl: './cart-degree.component.html',
  styleUrls: ['./cart-degree.component.scss']
})
export class CartDegreeComponent implements OnInit {

  public weather!: ICartDegree;

  constructor(@Inject('ServiceInjectString') private service) {}

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.service.activeHotel$.subscribe((itemWeather: IData) => {
      this.weather = itemWeather.weather;
    });
  }
}
