import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class PipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > args) {
      return value.substring(0, args) + '...';
    } else {
      return value;
    }
  }

}
