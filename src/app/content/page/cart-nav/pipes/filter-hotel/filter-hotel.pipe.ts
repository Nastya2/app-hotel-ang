import { AppService } from './../../../../../app.service';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotel'
})
export class FilterHotelPipe implements PipeTransform {

  constructor(private service: AppService) {}

  transform(hotels: IData[], type: string): IData[] {

    if(type == 'Все отели') {
      this.service.setCurrentItem(hotels[0]);
      return hotels;
    } else {
      let filterHotels: IData[] = hotels.filter(res => res.type === type);
      this.service.setCurrentItem(filterHotels[0]);
      return filterHotels;
    }
  }
}
