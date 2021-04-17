import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderssearchfilter'
})
export class OrderssearchfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
