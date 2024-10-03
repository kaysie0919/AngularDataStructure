import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  meal: string = '';
  mealPlanList: string[] = ['Monday: Grilled Chicken Salad', 'Tuesday: Spaghetti Bolognese', 'Wednesday: Stir-fried Vegetables'];

  addMeal() {
    if (this.meal.trim()) {
      this.mealPlanList.push(this.meal.trim());
      this.meal = '';
    }
  }

}
