import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'models/product';
import { CurrentProductService } from 'src/app/services/current-product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  url=environment.EditProductUrl
  constructor(private current:CurrentProductService, private http: HttpClient ) { }
  product=this.current.pro
  ngOnInit(): void {
  }

price="please enter new price"
stock="please enter new quntity"
category="please enter new category"
name="please enter new name"

onClick():void{
  this.http.post(this.url,this.product)
}


}
