import { Injectable } from '@angular/core';
import { GroceryItem } from '../interface/grocerylist';

@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {
  private groceryList: GroceryItem[] = [];

  getGroceryList(): GroceryItem[] {
    return this.groceryList;
  }

  addGroceryItem(groceryItem: GroceryItem): void {
    this.groceryList.push(groceryItem);
  }

  removeGroceryItem(id: number): void {
    this.groceryList = this.groceryList.filter(item => item.id !== id);
  }
}
