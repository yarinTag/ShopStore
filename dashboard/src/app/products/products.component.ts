import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'models/product';
import { ProductService } from '../services/product.service';
// import { CurrentUserService } from '../services/current-user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SharedService } from '../services/shared.service';
import { CurrentProductService } from '../services/current-product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


@Injectable()
export class ProductsComponent {
  products : Product[] = [];  

  ProductsUrl= environment.ProductUrl;
  ProductDelete= environment.ProductDelete;
  li:any;
  lis=[];
  status: string;
  constructor(private http : HttpClient,
     private productService:ProductService ,
     private sharedService:SharedService,
     private current:CurrentProductService){

}


onClickEdit(product: Product):void{
  this.current.changeCurrentProduct(product);

}

onDeleteClick(product: Product):void{
  const url = `${environment.ProductDeleteUrl}/${product._id}`
  // this.http.delete(url).subscribe(() => this.status = 'Delete successful');
}


ngOnInit(): void {

  this.http.get(this.ProductsUrl)
  .subscribe(Response => {    
    this.li=Response;
    this.products=this.li.products
    this.sharedService.sendClickEvent(this.products)
  });


 }
 load():void{
    this.ngOnInit()
}

}


