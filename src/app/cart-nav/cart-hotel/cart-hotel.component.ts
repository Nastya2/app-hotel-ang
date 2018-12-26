import { Component, OnInit, Input } from '@angular/core';
import { IData } from 'src/app/data/data';

@Component({
  selector: 'app-cart-hotel',
  templateUrl: './cart-hotel.component.html',
  styleUrls: ['./cart-hotel.component.scss']
})
export class CartHotelComponent {

  @Input() public hotel:IData;
  

}
