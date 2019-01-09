import { AppService } from './../app.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-degree',
  templateUrl: './cart-degree.component.html',
  styleUrls: ['./cart-degree.component.scss']
})
export class CartDegreeComponent implements OnInit, OnDestroy {

  public weather!: ICartDegree | undefined;
  private sub!: Subscription;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.sub = this.service.activeHotel$.subscribe((itemWeather: IData) => {
      if(itemWeather) {
        this.weather = itemWeather.weather;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
