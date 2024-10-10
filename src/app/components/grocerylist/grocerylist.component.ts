import { Component } from '@angular/core';
import { GrocerylistService } from '../services/grocerylist.service';
import { GroceryItem } from '../interface/grocerylist';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent {
  groceryItemName: string = '';
  groceryList: GroceryItem[] = [];
  nextId: number = 1;

  constructor(private grocerylistService: GrocerylistService) {
    this.groceryList = this.grocerylistService.getGroceryList();
  }

  addGroceryItem() {
    if (this.groceryItemName.trim()) {
      const newGroceryItem: GroceryItem = { id: this.nextId++, name: this.groceryItemName.trim() };
      this.grocerylistService.addGroceryItem(newGroceryItem);
      this.updateGroceryList();
      this.groceryItemName = '';
    }
  }

  removeGroceryItem(id: number) {
    this.grocerylistService.removeGroceryItem(id);
    this.updateGroceryList();
  }

  private updateGroceryList() {
    this.groceryList = this.grocerylistService.getGroceryList();
  }
}
