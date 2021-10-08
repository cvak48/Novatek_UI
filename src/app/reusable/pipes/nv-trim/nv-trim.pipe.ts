import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nvTrim'
})
export class NvTrimPipe implements PipeTransform {

  transform(text: string, length = 0): string {
    const threeDots = '. . .';
    let modifiedValue: string = '';
    const splittedValue = text.trim().split(' ');
    if (splittedValue.length > length && length !== 0) {
      for (let i = 0; i < length; i++) {
        modifiedValue += splittedValue[i] + ' ';
      }
      return modifiedValue.concat(threeDots);
    }
    else if (length === 0) {
      return '';
    } else {
      return text;
    }
  }

}
