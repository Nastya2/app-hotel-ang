import { AppService } from '../../../service/app.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss'],
})
export class CartNavComponent implements OnInit {

  constructor(private service: AppService) {}

  public type = 'Все отели';
  public infoHotels!: IData[];
  public menuList: Array<string> = ['Все отели', 'Апартаменты', 'Номера люкс'];

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.service.getData().subscribe((res) => {
      this.infoHotels = res;
      this.changeInfoHotel(this.infoHotels[0]);
    });
  }

  public changeInfoHotel(hotelItem) {
    this.service.setCurrentItem(hotelItem);
  }
}
