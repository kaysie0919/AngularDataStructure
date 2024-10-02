import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  product: string = '';
  productList: string[] = ['Laptop', 'Smartphone', 'Headphones'];

  addProduct() {
    if (this.product.trim()) {
      this.productList.push(this.product.trim());
      this.product = '';
    }
  }

}
