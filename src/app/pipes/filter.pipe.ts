import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], text?: string, property?: string): any {
    if (text === '') {
      return value;
    }
    text = text.toLocaleLowerCase();

    return value.filter(x => {
      return x[property].toLocaleLowerCase().includes(text);
    });
  }

}
