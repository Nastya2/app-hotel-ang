import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-social',
  templateUrl: './cart-social.component.html',
  styleUrls: ['./cart-social.component.scss']
})
export class CartSocialComponent {

  @Input() public info: ICartSocial;


}
