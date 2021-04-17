import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../../../models/order'
import { CurrentOrderService } from 'src/app/services/current-order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  OrderUrl = environment.OrderUrl;
  OrderDelete = environment.OrderDeleteUrl;
  url = environment.EditOrderUrl

  li: any;
  orders = [];
  status: string;
  constructor(private http: HttpClient, private current: CurrentOrderService) { }

  Ostatus:String
  searchValue :string

  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if (token && localStorage.getItem("token") != "undefined" || "") {
      this.http.get(this.OrderUrl)
        .subscribe(Response => {
          this.li = Response;
          this.orders = this.li.orders
          console.log(this.li);
        });
    }
  }

  onClick(order: Order) {
    this.current.changeCurrentOrder(order);


  }
  Ostatus: String


  onClickEdit(order: Order): void {
    this.current.changeCurrentOrder(order);
    // this.Ostatus= order.orderStatus
    if (order.orderStatus === 'Delivered') {
      return
    }
    if (this.Ostatus !== order.orderStatus) {
      order.orderStatus = this.Ostatus
    }
    this.http.put(this.url + order._id, order).subscribe(() => this.status = 'Edit successful');
  }

  onDeleteClick(order: Order): void {
    const url = `${environment.OrderDeleteUrl}${order._id}`
    console.log(url);
    this.http.delete(url).subscribe(() => this.status = 'Delete successful');
    window.location.reload();
  }

}
