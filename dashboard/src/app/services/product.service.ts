import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Product} from 'models/product'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import 'rxjs/Rx';
import { enableDebugTools } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ProductsUrl= environment.ProductUrl;
    private ProductDelete= environment.ProductDelete;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    this.http.get(this.ProductsUrl)
    .subscribe(Response => {
        
      if(Response){  
        hideloader();
      }
     return Response
      
    });
    function hideloader(){
      document.getElementById('loading')}
      return
   }
  

  addProduct(_name: String): Observable<Product> {
    return this.http.post<Product>(this.ProductsUrl, { name:_name });
  }

  getProduct(_name: String): Observable<Product> {
    const url = `${this.ProductsUrl}/${_name}`;
    return this.http.get<Product>(url);
  }

  updateProduct(Product: Product): Observable<Product> {
    const url = `${this.ProductsUrl}/${Product._id}`;
    return this.http.patch<Product>(url, { product: Product });
  }

  deleteProduct(_id:String){      
    const url = `${this.ProductDelete}/${_id}`
    this.http.delete(url).subscribe(data => {
        console.log(data);
      });;
  }
}
