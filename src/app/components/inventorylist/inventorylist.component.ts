import { Component } from '@angular/core';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  inventoryItem: string = '';
  inventoryList: string[] = ['Laptop', 'Smartphone', 'Headphones'];

  addInventoryItem() {
    if (this.inventoryItem.trim()) {
      this.inventoryList.push(this.inventoryItem.trim());
      this.inventoryItem = '';
    }
  }

}
