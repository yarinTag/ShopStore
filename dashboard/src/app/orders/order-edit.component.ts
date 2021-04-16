import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Order } from 'models/order';
import { CurrentOrderService } from 'src/app/services/current-order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  url=environment.EditOrderUrl
  status: string;
  constructor(private current:CurrentOrderService, private http: HttpClient ) { }
  order=this.current.order
  ngOnInit(): void {
  }


Ostatus:String= this.order.orderStatus

private extractData(res: Response) {
  let body = res.json();
  return body;
}

onClick():void{
  if(this.Ostatus!==this.order.orderStatus){
    this.order.orderStatus=this.Ostatus
  }  
  this.http.put(this.url+this.order._id,this.order).subscribe(() => this.status = 'Edit successful');
}



}
