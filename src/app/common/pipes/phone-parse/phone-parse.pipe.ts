import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneParse'
})
export class PhoneParsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
  }

}
