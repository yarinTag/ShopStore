import { Injectable } from '@angular/core';
import { Product } from 'models/product';
import { Observable, Subject } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class SharedService {

private   products : Product[] = [];  
sendClickEvent(prod: Product[]) {
  this.products=prod;  
}
getClickEvent(): Product[]{ 
  return this.products;
}

}