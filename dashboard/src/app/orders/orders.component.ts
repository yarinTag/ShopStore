import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Order} from '../../../models/order'
import { CurrentOrderService } from 'src/app/services/current-order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  OrderUrl= environment.OrderUrl;
  li:any;
  orders=[];
  constructor(private http : HttpClient, private current:CurrentOrderService ){}
  ngOnInit(): void {
        
    this.http.get(this.OrderUrl)
    .subscribe(Response => {
      this.li= Response; 
      this.orders=this.li.orders 
      console.log(this.li);
    }); 

  }

  onClick(order : Order){
    this.current.changeCurrentOrder(order);
    console.log(order);
    
  }

}
