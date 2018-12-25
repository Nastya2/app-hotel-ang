import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgParse'
})

export class ImgParsePipe implements PipeTransform {

  transform(namePicture: string, format?: string): string {
    let url: string;
    if(namePicture) {
      if(format) {
        url =  `assets/` + namePicture + format;
      } else {
        url =  `assets/` + namePicture;
      }
      return url;
    }
  }
}