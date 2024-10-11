import { Component } from '@angular/core';
import { FurniturelistService } from '../services/furniturelist.service';
import { Specification } from '../interface/furniturelist';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrls: ['./furniturelist.component.css']
})
export class FurniturelistComponent {
  furnitureItem: string = '';
  furnitureList: Specification[] = [];
  nextId: number = 1;

  constructor(private furnitureService: FurniturelistService) {
    this.furnitureList = this.furnitureService.getFurnitureList();
  }

  addFurniture() {
    if (this.furnitureItem.trim()) {
      const newFurniture: Specification = { id: this.nextId++, detail: this.furnitureItem.trim() };
      this.furnitureService.addFurniture(newFurniture);
      this.updateFurnitureList();
      this.furnitureItem = '';
    }
  }

  removeFurniture(id: number) {
    this.furnitureService.removeFurniture(id);
    this.updateFurnitureList();
  }

  private updateFurnitureList() {
    this.furnitureList = this.furnitureService.getFurnitureList();
  }
}
