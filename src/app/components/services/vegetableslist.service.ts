import { Injectable } from '@angular/core';
import { Vegetable } from '../interface/vegtableslist';

@Injectable({
  providedIn: 'root'
})
export class VegetableslistService {
  private vegetables: Vegetable[] = [];

  getVegetables(): Vegetable[] {
    return this.vegetables;
  }

  addVegetable(vegetable: Vegetable): void {
    this.vegetables.push(vegetable);
  }

  removeVegetable(id: number): void {
    this.vegetables = this.vegetables.filter(veg => veg.id !== id);
  }
}
