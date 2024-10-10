import { Injectable } from '@angular/core';
import { FoodItem } from '../interface/foodmenu';

@Injectable({
  providedIn: 'root'
})
export class FoodmenuService {
  private foodMenu: FoodItem[] = [];

  getFoodMenu(): FoodItem[] {
    return this.foodMenu;
  }

  addFoodItem(foodItem: FoodItem): void {
    this.foodMenu.push(foodItem);
  }

  removeFoodItem(id: number): void {
    this.foodMenu = this.foodMenu.filter(food => food.id !== id);
  }
}
