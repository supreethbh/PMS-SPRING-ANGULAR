import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product;
  productId: number;
  
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.product = new Product();
    this.productId = this.activatedRoute.snapshot.params['productId'];

    this.productService.getProductDetailsById(this.productId)
      .subscribe(data => {
        console.log(data)
        this.product = data;
    }, error => console.log(error));

  }

  updateProduct() {
    this.productService.updateProductDetails(this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        if (data != null) {
          alert("Product " + data.productId + " Updated Successfully.!");
          this.gotoList();
        } else {
          alert("Product Couldn't Be Updated..!");
        }
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['/showAll']);
  }

}
