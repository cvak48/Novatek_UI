import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'advanceFilter',
})
export class AdvanceFilterPipe implements PipeTransform {
    transform(value: any, input: string, searchableList: any): any {
        if (input) {
            input = input.trim().toLowerCase();
            const suggestedList = value?.filter((item: any) => {
                let isTrue = false;
                for (const k in searchableList) {
                    if (JSON.stringify(item[searchableList[k]]).toLowerCase().indexOf(input) > -1) {
                        isTrue = true;
                    }
                    if (isTrue) {
                        return item;
                    }
                }
            });

            return suggestedList;
        }
        // TODO: either value or [] not sure about functionality
        return value;
    }


}
