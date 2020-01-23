import { AppService } from '../../../service/app.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart-degree',
  templateUrl: './cart-degree.component.html',
  styleUrls: ['./cart-degree.component.scss']
})
export class CartDegreeComponent implements OnInit, OnDestroy {

  public weather!: ICartDegree | undefined;
  private destroy: Subject<any> = new Subject<any>();

  constructor(private service: AppService) {}

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.service.getCurrentItem().pipe(takeUntil(this.destroy)).subscribe((itemWeather: IData) => {
      if (itemWeather) {
        this.weather = itemWeather.weather;
      }
    });
  }

  ngOnDestroy() {
    this.destroy.next(null);
  }
}
