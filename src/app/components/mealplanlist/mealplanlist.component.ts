import { Component } from '@angular/core';
import { PlanmeallistService } from '../services/planmeallist.service';
import { Meal } from '../interface/mealplanlist';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrls: ['./mealplanlist.component.css']
})
export class MealplanlistComponent {
  meal: string = '';
  mealPlanList: Meal[] = [];
  nextId: number = 1;

  constructor(private mealService: PlanmeallistService) {
    this.mealPlanList = this.mealService.getMealPlanList();
  }

  addMeal() {
    if (this.meal.trim()) {
      const newMeal: Meal = { id: this.nextId++, detail: this.meal.trim() };
      this.mealService.addMeal(newMeal);
      this.updateMealPlanList();
      this.meal = '';
    }
  }

  removeMeal(id: number) {
    this.mealService.removeMeal(id);
    this.updateMealPlanList();
  }

  private updateMealPlanList() {
    this.mealPlanList = this.mealService.getMealPlanList();
  }
}
