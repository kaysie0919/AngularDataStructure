import { Injectable } from '@angular/core';
import { Meal } from '../interface/mealplanlist';

@Injectable({
  providedIn: 'root'
})
export class PlanmeallistService {
  private mealPlanList: Meal[] = [];

  getMealPlanList(): Meal[] {
    return this.mealPlanList;
  }

  addMeal(meal: Meal): void {
    this.mealPlanList.push(meal);
  }

  removeMeal(id: number): void {
    this.mealPlanList = this.mealPlanList.filter(meal => meal.id !== id);
  }
}
