import { AppService } from './../../../app.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotel'
})
export class FilterHotelPipe implements PipeTransform {

  constructor(private service: AppService) {}

  transform(hotels: IData[], type: string): IData[] {

    if(type == 'Все отели') {
      this.sendActiveHotel(hotels[0]);
      return hotels;
    } else {
      let filterHotels: IData[] = hotels.filter(res => res.type === type);
      this.sendActiveHotel(filterHotels[0]);
      return filterHotels;
    }
  }

  private sendActiveHotel(hotel: IData) {
    this.service.activeHotel$.next(hotel);
  }
}
