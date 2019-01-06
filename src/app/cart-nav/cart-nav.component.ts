import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

enum MenuEnum {
  'Все отели' = 'all',
  'Апартаменты' = 'apartments',
  'Номера люкс' = 'lux'
}

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss']
})
export class CartNavComponent implements OnInit {

  constructor(private service: AppService) {}

  public typeHotel!: string;
  public infoHotels!: IData[];
  public info!: IData[];
  public menuList: Array<string> = ['Все отели', 'Апартаменты', 'Номера люкс'];
  public MenuEnum = MenuEnum;

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.service.getData().subscribe((res) => {
      this.info = res;
      this.navClick('Все отели');
    });
  }

  public changeInfoHotel(item) {
    this.service.activeHotel$.next(item);
  }

  public navClick(item: string) {
    this.typeHotel = MenuEnum[item];
    if (this.typeHotel === MenuEnum['Все отели']) {
      this.infoHotels = this.info;
    } else {
      this.infoHotels = this.info.filter(res => res.type === this.typeHotel);
    }
    this.changeInfoHotel(this.infoHotels[0]);
  }
}
