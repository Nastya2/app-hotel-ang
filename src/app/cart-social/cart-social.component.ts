import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../data/data';

@Component({
  selector: 'app-cart-social',
  templateUrl: './cart-social.component.html',
  styleUrls: ['./cart-social.component.scss']
})
export class CartSocialComponent {

  @Input() public info:IData;


}
