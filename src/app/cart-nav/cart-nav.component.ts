import { IData } from './../data/data';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


enum MenuEnum {
  'Все отели' = "all",
  'Апартаменты' = "apartments",
  'Номера люкс' = "lux"
}

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss']
})
export class CartNavComponent  {

  @Input() public info: IData[];
  @Output() outputInfoHotel:EventEmitter<IData> = new EventEmitter();

  public typeHotel: string = '';
  public infoHotels: IData[];
  public menuList:Array<string> = ['Все отели','Апартаменты','Номера люкс'];
  public menuEnum = MenuEnum;

  ngOnInit() {
    this.navClick('Все отели');
  }
  
  public changeInfoHotel(item) {
    this.outputInfoHotel.emit(item);
  }

  public navClick(item: string) {
    this.typeHotel = this.menuEnum[item];
    if(this.typeHotel== this.menuEnum['Все отели']) {
      this.infoHotels = this.info;
    } else {
      this.infoHotels = this.info.filter(res => res.type == this.typeHotel);
    }
    this.changeInfoHotel(this.infoHotels[0]);
  }
}
