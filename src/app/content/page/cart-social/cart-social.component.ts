import { Subject } from 'rxjs';
import { AppService } from './../../../app.service';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-cart-social',
  templateUrl: './cart-social.component.html',
  styleUrls: ['./cart-social.component.scss']
})
export class CartSocialComponent implements OnInit {

  public social_info!: ICartSocial | undefined;
  private destroy: Subject<any> = new Subject<any>();

  constructor(private service: AppService) {}

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.service.getCurrentItem().pipe(takeUntil(this.destroy)).subscribe((itemSocial: IData) => {
      if(itemSocial) {
        this.social_info = itemSocial.social_info;
      }
    });
  }

  ngOnDestroy() {
    this.destroy.next(null);
  }
}
