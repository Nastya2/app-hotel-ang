import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cart-hotel',
  templateUrl: './cart-hotel.component.html',
  styleUrls: ['./cart-hotel.component.scss']
})
export class CartHotelComponent {

  @Input() public hotel:IData;
  

}
