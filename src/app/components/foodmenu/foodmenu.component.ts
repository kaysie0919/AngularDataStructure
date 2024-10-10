import { Component } from '@angular/core';
import { FoodmenuService } from '../services/foodmenu.service';
import { FoodItem } from '../interface/foodmenu';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent {
  foodItemName: string = '';
  foodMenu: FoodItem[] = [];
  nextId: number = 1;

  constructor(private foodmenuService: FoodmenuService) {
    this.foodMenu = this.foodmenuService.getFoodMenu();
  }

  addFoodItem() {
    if (this.foodItemName.trim()) {
      const newFoodItem: FoodItem = { id: this.nextId++, name: this.foodItemName.trim() };
      this.foodmenuService.addFoodItem(newFoodItem);
      this.updateFoodMenu();
      this.foodItemName = '';
    }
  }

  removeFoodItem(id: number) {
    this.foodmenuService.removeFoodItem(id);
    this.updateFoodMenu();
  }

  private updateFoodMenu() {
    this.foodMenu = this.foodmenuService.getFoodMenu();
  }
}
