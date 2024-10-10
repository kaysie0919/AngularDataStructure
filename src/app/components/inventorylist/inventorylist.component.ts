import { Component } from '@angular/core';
import { InventorylistService } from '../services/inventorylist.service';
import { InventoryItem } from '../interface/inventorylist';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css']
})
export class InventorylistComponent {
  inventoryItemName: string = '';
  inventoryList: InventoryItem[] = [];
  nextId: number = 1;

  constructor(private inventorylistService: InventorylistService) {
    this.inventoryList = this.inventorylistService.getInventoryList();
  }

  addInventoryItem() {
    if (this.inventoryItemName.trim()) {
      const newItem: InventoryItem = { id: this.nextId++, name: this.inventoryItemName.trim() };
      this.inventorylistService.addInventoryItem(newItem);
      this.updateInventoryList();
      this.inventoryItemName = '';
    }
  }

  removeInventoryItem(id: number) {
    this.inventorylistService.removeInventoryItem(id);
    this.updateInventoryList();
  }

  private updateInventoryList() {
    this.inventoryList = this.inventorylistService.getInventoryList();
  }
}
