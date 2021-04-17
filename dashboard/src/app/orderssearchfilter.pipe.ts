import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'models/order';

@Pipe({
  name: 'orderssearchfilter'
})
export class OrderssearchfilterPipe implements PipeTransform {

    transform(orders: Order[], searchValue: string): Order[] {
   
      if(!orders || !searchValue){
          return orders;
      }
      return orders.filter(order=> contains(order,searchValue));
  
      function contains(actual: Order, expected:string) {
        if (actual._id.toLocaleLowerCase().indexOf(expected) >= 0 || actual.orderStatus.toLocaleLowerCase().indexOf(expected) >= 0) {
          return actual;
        }
      }
    }

}
