import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../../../models/order';

@Injectable({
  providedIn: 'root'
})
export class CurrentOrderService {
  static changeCurrentOrder(order: Order) {
    throw new Error('Method not implemented.');
  }

  private source = new BehaviorSubject(null);
  currentOrder = this.source.asObservable();

  constructor() {}

  changeCurrentOrder(order: Order) {
    this.source.next(order);
  }
}
