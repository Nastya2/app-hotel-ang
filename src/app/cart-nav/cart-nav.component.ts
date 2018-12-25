import { IData } from './../data/data';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss']
})
export class CartNavComponent implements OnInit {

  @Input() info: IData;
  @Output() outputInfoHotel = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  public changeInfoHotel(item) {
    this.outputInfoHotel.emit(item);
  }

}
