import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceryItem: string = '';
  groceryList: string[] = ['Milk', 'Bread', 'Eggs'];

  addGroceryItem() {
    if (this.groceryItem.trim()) {
      this.groceryList.push(this.groceryItem.trim());
      this.groceryItem = '';
    }
  }

}
