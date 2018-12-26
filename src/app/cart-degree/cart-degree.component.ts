import { IData } from './../data/data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-degree',
  templateUrl: './cart-degree.component.html',
  styleUrls: ['./cart-degree.component.scss']
})
export class CartDegreeComponent {

  @Input() public info: IData;


}
