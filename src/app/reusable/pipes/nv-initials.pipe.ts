import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nvInitials'
})
export class NvInitialsPipe implements PipeTransform {

  transform(name: string): string {
    const splitNames = name?.trim().split(' ');
    const firstLetter = splitNames?.length > 0 ? splitNames[0].trim().substring(0, 1).toUpperCase() : '';
    const secondLetter = splitNames?.length > 1 ? splitNames[1].trim().substring(0, 1).toUpperCase() : '';
    return (firstLetter + secondLetter);
  }

}
