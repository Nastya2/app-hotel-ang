import { IData } from './../data/data';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss']
})
export class CartNavComponent  {

  @Input() public info: IData[];
  @Output() outputInfoHotel:EventEmitter<IData> = new EventEmitter();

  public typeHotel: string = 'all';
  public infoHotels: IData[];

  ngOnInit() {
    this.navEnter('all');
  }
  
  public changeInfoHotel(item) {
    item['active'] = true;
    this.outputInfoHotel.emit(item);
  }

  public navEnter(type?: string) {
    this.typeHotel = type;
    if(this.typeHotel== 'all') {
      this.infoHotels = this.info;
    } else {
      this.infoHotels = this.info.filter(res => res.type == type);
    }
    this.changeInfoHotel(this.infoHotels[0]);
  }
  

}
