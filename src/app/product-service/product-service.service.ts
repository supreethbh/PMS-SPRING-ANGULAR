import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dburl:string = "http://localhost:9010/product";
  
  constructor(private http: HttpClient) { }

  insertProductDetails(product: Product): Observable<Product> {    
    return this.http.post<Product>(this.dburl + "/insert", product);   
  }
  
  updateProductDetails(product: Product): Observable<Product> {    
    return this.http.put<Product>(this.dburl + "/update", product);   
  }

  deleteProduct(product: Product) {
    this.http.delete(this.dburl + "/delete/" + product.productId, {responseType: 'text'})
        .subscribe(data => {
          alert(data);
        },
        error => console.log(error)); 
  }
  
  getProductDetailsById(productId: number): Observable<any> {
    return this.http.get<Product>(this.dburl + "/getProductById/" + productId);
  }
  
  getAllProducts(): Observable<any> {
    return this.http.get<Product[]>(this.dburl + "/getProducts");
  }

}