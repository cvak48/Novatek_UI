import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAll'
})
export class FilterAllPipe implements PipeTransform {
  transform(value: any, args?: any): any {

      if (!value) return null;
      if (!args) return value;

      args = args.toLowerCase();

      
      const suggestedList = value.filter(function (item: any) {
        console.log('item>>' + item);
        console.log('>>' + JSON.stringify(item));
        return JSON.stringify(item).toLowerCase().includes(args);
    });
    console.log('result>>>', suggestedList);
    
      return suggestedList;
  }
}
