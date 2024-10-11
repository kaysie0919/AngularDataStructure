import { Component } from '@angular/core';
import { BudgetlistService } from '../services/budgetlist.service';
import { Budget } from '../interface/budgetlist';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrls: ['./budgetlist.component.css']
})
export class BudgetlistComponent {
  budgetItem: string = '';
  budgetList: Budget[] = [];
  nextId: number = 1;

  constructor(private budgetService: BudgetlistService) {
    this.budgetList = this.budgetService.getBudgetList();
  }

  addBudgetItem() {
    if (this.budgetItem.trim()) {
      const newBudget: Budget = { id: this.nextId++, detail: this.budgetItem.trim() };
      this.budgetService.addBudget(newBudget);
      this.updateBudgetList();
      this.budgetItem = '';
    }
  }

  removeBudget(id: number) {
    this.budgetService.removeBudget(id);
    this.updateBudgetList();
  }

  private updateBudgetList() {
    this.budgetList = this.budgetService.getBudgetList();
  }
}
