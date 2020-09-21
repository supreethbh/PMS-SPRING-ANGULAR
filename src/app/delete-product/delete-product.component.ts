import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  products: Observable<Product[]>;
  
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  deleteProduct(product: Product){
    this.productService.deleteProduct(product);
    this.reloadData();
  }

  reloadData() {
    this.router.navigate(['/showAll']);
  }

}
