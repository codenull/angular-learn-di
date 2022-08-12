import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product',
  // templateUrl: './product.component.html',
  template: `
  <div>
    <h1>Product Details</h1>
    <h2>Title: {{product.title}}</h2>
    <h2>Description: {{product.description}}</h2>
    <h2>Price: {{product.price}}</h2>
  </div>
  `,
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export default class ProductComponent implements OnInit {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit() {}
}
