import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'models/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  loading = false;
  submitted = false;
  ProductUrl=environment.GetSingleProduct
  NewProductUrl=environment.AddNewProduct
  status: string;
  constructor(
      private http : HttpClient,
  ) {}
  name: String
  price: Number
  description: String
  category: String
  imageUrl: String
  imageID: String
  stock: Number
  response:any
  product:any
  ngOnInit() {

      this.http.get(this.ProductUrl)
      .subscribe(Response => {    
        this.response=Response;
        this.product=this.response.product
        console.log(this.product);
        
      });
      
  }
   randomString(length, chars): String {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
  // convenience getter for easy access to form fields

  onSubmit() {
      this.submitted = true;
      this.loading = true;
      this.product.name=this.name
      this.product.price=this.price
      this.product.stock=this.stock
      this.product.description=this.description  
      this.product.images.public_id=this.imageID
      this.product.images.url=this.imageUrl
      this.product._id=null
      console.log(this.product);
            
      this.http.post(this.NewProductUrl,this.product).subscribe(() => this.status = 'Product Added successful');
      this.loading=false
    }


}
