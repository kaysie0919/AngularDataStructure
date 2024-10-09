import { Component } from '@angular/core';
import { VegetableslistService } from '../services/vegetableslist.service';
import { Vegetable } from '../interface/vegtableslist';

@Component({
  selector: 'app-vagetablelist',
  templateUrl: './vagetablelist.component.html',
  styleUrl: './vagetablelist.component.css'
})
export class VagetablelistComponent {
  vegetableName: string = '';
  vegetablePrice: number | null = null;
  vegetableList: Vegetable[] = [];
  nextId: number = 1;

  constructor(private vegetablesService: VegetableslistService) {
    this.vegetableList = this.vegetablesService.getVegetables();
  }

  addVegetable() {
    if (this.vegetableName.trim() && this.vegetablePrice !== null) {
      const newVegetable: Vegetable = { 
        id: this.nextId++, 
        name: this.vegetableName.trim(), 
        price: this.vegetablePrice 
      };
      this.vegetablesService.addVegetable(newVegetable);
      this.updateVegetableList();
      this.vegetableName = '';
      this.vegetablePrice = null;
    }
  }

  removeVegetable(id: number) {
    this.vegetablesService.removeVegetable(id);
    this.updateVegetableList();
  }

  private updateVegetableList() {
    this.vegetableList = this.vegetablesService.getVegetables();
  }
}
