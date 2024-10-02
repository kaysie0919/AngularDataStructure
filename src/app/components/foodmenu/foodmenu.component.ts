import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrl: './foodmenu.component.css'
})
export class FoodmenuComponent {
  foodItem: string = '';
  foodMenu: string[] = ['Pizza', 'Burger', 'Pasta'];

  addFoodItem() {
    if (this.foodItem.trim()) {
      this.foodMenu.push(this.foodItem.trim());
      this.foodItem = '';
    }
  }

}
