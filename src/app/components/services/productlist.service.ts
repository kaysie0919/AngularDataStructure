import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  private productList: Product[] = [];
  private nextId: number = 1;

  getProducts(): Product[] {
    return this.productList;
  }

  addProduct(name: string) {
    if (name.trim()) {
      const product: Product = {
        id: this.nextId++,
        name: name.trim()
      };
      this.productList.push(product);
    }
  }

  removeProduct(id: number) {
    this.productList = this.productList.filter(product => product.id !== id);
  }
}
