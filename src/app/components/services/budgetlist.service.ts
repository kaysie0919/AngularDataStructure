import { Injectable } from '@angular/core';
import { Budget } from '../interface/budgetlist';

@Injectable({
  providedIn: 'root'
})
export class BudgetlistService {
  private budgetList: Budget[] = [];

  getBudgetList(): Budget[] {
    return this.budgetList;
  }

  addBudget(budget: Budget): void {
    this.budgetList.push(budget);
  }

  removeBudget(id: number): void {
    this.budgetList = this.budgetList.filter(budget => budget.id !== id);
  }
}
