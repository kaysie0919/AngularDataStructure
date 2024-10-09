import { Component } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  product: string = '';
  productList: { id: number; name: string }[] = [];

  constructor(private productService: ProductlistService) {
    this.productList = this.productService.getProducts();
  }

  addProduct() {
    this.productService.addProduct(this.product);
    this.productList = this.productService.getProducts();
    this.product = '';
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id);
    this.productList = this.productService.getProducts();
  }
}
