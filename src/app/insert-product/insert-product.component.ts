import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product-service.service';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }
  
  save() {
    this.productService
    .insertProductDetails(this.product)
    .subscribe(data => {
      console.log(data);
      this.product = new Product();
      if (data != null) {
        alert("Product " + data.productName + " Added Successfully.!");
        this.gotoList();
      } else {
        alert("Product Couldn't Be Inserted..!");
      }
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/showAll']);
  }

}
