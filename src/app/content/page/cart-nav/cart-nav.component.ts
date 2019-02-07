import { AppService } from './../../../app.service';
import { Component, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss'],
})
export class CartNavComponent implements OnInit,OnChanges {

  constructor(private service: AppService) {}

  public type:string = 'Все отели';
  public infoHotels!: IData[];
  public menuList: Array<string> = ['Все отели', 'Апартаменты', 'Номера люкс'];

  ngOnInit() {
    setTimeout(() => {
      this.getData();
    },1000)
  }

  ngOnChanges() {
    console.log('dkkfkf');
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
