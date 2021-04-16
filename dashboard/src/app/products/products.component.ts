import { Component, OnInit } from '@angular/core';
import { Product } from 'models/product';
import { ProductService } from '../services/product.service';
// import { CurrentUserService } from '../services/current-user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getLocaleDateFormat } from '@angular/common';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


@Injectable()
export class ProductsComponent {
 
  ProductsUrl= environment.ProductUrl;
  ProductDelete= environment.ProductDelete;
  products : Product[] = [];  
  li:any;
  lis=[];
  constructor(private http : HttpClient, private productService:ProductService ,private sharedService:SharedService){

}


onClickEdit(product: Product):void{
  this.productService.updateProduct(product);
}

onDeleteClick(product: Product):void{
  const url = `${this.ProductDelete}/${product._id}`
  
  this.http.delete(url).subscribe(data => {
    })
    }


ngOnInit(): void {

  this.http.get(this.ProductsUrl)
  .subscribe(Response => {
    console.log(Response[2]);
    
    this.li=Response.products;
      
    this.products=this.li
    console.log(this.products);

    this.sharedService.sendClickEvent(this.products)
  });

 }


}

