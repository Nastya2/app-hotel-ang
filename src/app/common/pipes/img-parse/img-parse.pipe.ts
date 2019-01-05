import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgParse'
})

export class ImgParsePipe implements PipeTransform {

  transform(namePicture: string, format?: string): string | undefined {
    let url: string;
    if (!namePicture) {
      return;
    }
    format ?  url = `../../../assets/` + namePicture + format : url = `../../../assets/` + namePicture;
    return url;
  }
}
