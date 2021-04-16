import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CurrentProductService {
  static changeCurrentProduct(product: Product) {
    throw new Error('Method not implemented.');
  }

  private source = new BehaviorSubject(null);
  currentProduct = this.source.asObservable();
  pro:Product
  constructor() {}

  changeCurrentProduct(product: Product) {
    this.source.next(product);
    this.pro=product
    console.log(product);
    
  }

  getCurrentProduct():Product{
    return this.pro
  }
}
