import { environment } from './../../../../environments/environment.prod';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgParse'
})

export class ImgParsePipe implements PipeTransform {

  transform(namePicture: string, format?: string): string {
    let url: string;
    if(environment.production) {
      format ?  url = `./assets/` + namePicture + format : url = `./assets/` + namePicture;
    } else {
      format ?  url = `./../../../assets/` + namePicture + format : url = `./../../../assets/` + namePicture;
    }
    return url;
  }
}
