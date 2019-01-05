import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-social',
  templateUrl: './cart-social.component.html',
  styleUrls: ['./cart-social.component.scss']
})
export class CartSocialComponent implements OnInit {

  public social_info!: ICartSocial;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.service.activeHotel$.subscribe((itemSocial: IData) => {
      this.social_info = itemSocial.social_info;
    });
  }


}
