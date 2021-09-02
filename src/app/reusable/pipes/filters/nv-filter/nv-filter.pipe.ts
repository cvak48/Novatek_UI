import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nvFilter'
})
export class NvFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.trim().toLowerCase();
    const suggestedList = value.filter( (item: any) => {
      const hasItem = JSON.stringify(item).toLowerCase().includes(args);
      return hasItem;
    });
    console.log('result>>>', suggestedList);

    return suggestedList;
  }
}
