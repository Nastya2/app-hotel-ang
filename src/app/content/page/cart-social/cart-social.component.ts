import { AppService } from './../../../app.service';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-social',
  templateUrl: './cart-social.component.html',
  styleUrls: ['./cart-social.component.scss']
})
export class CartSocialComponent implements OnInit {

  public social_info!: ICartSocial | undefined;
  private sub!: Subscription;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.sub = this.service.activeHotel$.subscribe((itemSocial: IData) => {
      if(itemSocial) {
        this.social_info = itemSocial.social_info;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
