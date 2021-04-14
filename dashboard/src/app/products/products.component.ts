import { Component, OnInit } from '@angular/core';
import { Product } from 'models/product';
import { ProductService } from '../services/product.service';
// import { CurrentUserService } from '../services/current-user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  constructor(private http : HttpClient, private productService:ProductService ){
      
}
onClickEdit(product: Product):void{
  this.productService.updateProduct(product);
}

onDeleteClick(product: Product):void{
  const url = `${this.ProductDelete}/${product._id}`
  console.log(url);
  
  this.http.delete(url).subscribe(data => {
      console.log(data);
    })
    }


ngOnInit(): void {
  this.http.get(this.ProductsUrl)
  .subscribe(Response => {

    if(Response){  
      hideloader();
    }
    this.li=Response.products;  
    this.products=this.li
    
  });
  function hideloader(){
    document.getElementById('loading')}
 }

}



