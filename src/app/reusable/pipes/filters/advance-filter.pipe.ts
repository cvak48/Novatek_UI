import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'advanceFilter',
})
export class AdvanceFilterPipe implements PipeTransform {
    transform(value: any, input: string, searchableList: any) {
        if (input) {
            input = input.toLowerCase();
            const suggestedList = value.filter((item: any) => {
                let isTrue = false;
                for (let k in searchableList) {
                    if (item[searchableList[k]].toLowerCase().indexOf(input) > -1) {
                        isTrue = true;
                    }
                    if (isTrue) {
                        return item
                    }
                }
            });
            
            return suggestedList;
        }
        return value;
    }
}
