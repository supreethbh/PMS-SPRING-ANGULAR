import { ProductService } from '../product-service/product-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-service/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

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

  gotoList() {
    this.router.navigate(['/showAll']);
  }

}
