import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from 'src/app/services/current-product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  url=environment.EditProductUrl
  status: string;
  constructor(private current:CurrentProductService, private http: HttpClient ) { }
  product=this.current.pro
  ngOnInit(): void {
  }

price:Number= this.product.price
stock:Number= this.product.stock
category:String= this.product.category
name:String=this.product.name

private extractData(res: Response) {
  let body = res.json();
  return body;
}

onClick():void{
  if(this.name!==this.product.name){
    this.product.name=this.name
  }
    if(this.price!==this.product.price){
    this.product.price=this.price    
  }
  if(this.stock!==this.product.stock){
    this.product.stock=this.stock
  }
  if(this.category!==this.product.category){
    this.product.category=this.category
  }
  this.http.put(this.url+'/'+this.product._id,this.product).subscribe(() => this.status = 'Edit successful');
}



}
