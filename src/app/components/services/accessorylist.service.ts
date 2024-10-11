import { Injectable } from '@angular/core';
import { Specification } from '../interface/accessorylist';

@Injectable({
  providedIn: 'root'
})
export class AccessorylistService {
  private accessoryList: Specification[] = [];

  getAccessoryList(): Specification[] {
    return this.accessoryList;
  }

  addAccessory(item: Specification): void {
    this.accessoryList.push(item);
  }

  removeAccessory(id: number): void {
    this.accessoryList = this.accessoryList.filter(item => item.id !== id);
  }
}
