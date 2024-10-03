import { Component } from '@angular/core';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {
  furnitureItem: string = '';
  furnitureList: string[] = ['Sofa', 'Dining Table', 'Chair'];

  addFurniture() {
    if (this.furnitureItem.trim()) {
      this.furnitureList.push(this.furnitureItem.trim());
      this.furnitureItem = '';
    }
  }

}
