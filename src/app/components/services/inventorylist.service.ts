import { Injectable } from '@angular/core';
import { InventoryItem } from '../interface/inventorylist';

@Injectable({
  providedIn: 'root'
})
export class InventorylistService {
  private inventoryList: InventoryItem[] = [];

  getInventoryList(): InventoryItem[] {
    return this.inventoryList;
  }

  addInventoryItem(item: InventoryItem): void {
    this.inventoryList.push(item);
  }

  removeInventoryItem(id: number): void {
    this.inventoryList = this.inventoryList.filter(item => item.id !== id);
  }
}
