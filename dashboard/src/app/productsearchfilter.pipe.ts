import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'models/product';

@Pipe({
  name: 'productsearchfilter'
})
export class ProductsearchfilterPipe implements PipeTransform {
  transform(products: Product[], searchValue: string): Product[] {
 
    if(!products || !searchValue){
        return products;
    }
    return products.filter(Product=> contains(Product,searchValue));

    function contains(actual: Product, expected:string) {
      if (actual.name.toLocaleLowerCase().indexOf(expected) >= 0 || actual.category.toLocaleLowerCase().indexOf(expected) >= 0 || actual._id.toLocaleLowerCase().indexOf(expected) >= 0) {
        return actual;
      }
    }
  }

}
