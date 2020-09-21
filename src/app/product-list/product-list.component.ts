import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  dburl:string = "http://localhost:9010/product";

  constructor(private productService: ProductService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() { 
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getAllProducts();
  }

  deleteProduct(product: Product) {
    this.http.delete(this.dburl + "/delete/" + product.productId, {responseType: 'text'})
        .subscribe(data => {
          alert(data);
          this.reloadData();
        },
        error => console.log(error)); 
  }

  getProductDetailsById(productId: number){
    this.router.navigate(['details', productId]);
  }

  updateProductDetails(product: Product){
    this.router.navigate(['update', product]);
  }

}
