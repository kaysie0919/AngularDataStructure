import { Injectable } from '@angular/core';
import { Specification } from '../interface/furniturelist';

@Injectable({
  providedIn: 'root'
})
export class FurniturelistService {
  private furnitureList: Specification[] = [];

  getFurnitureList(): Specification[] {
    return this.furnitureList;
  }

  addFurniture(item: Specification): void {
    this.furnitureList.push(item);
  }

  removeFurniture(id: number): void {
    this.furnitureList = this.furnitureList.filter(item => item.id !== id);
  }
}
