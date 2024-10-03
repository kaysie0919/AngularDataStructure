import { Component } from '@angular/core';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent {
  budgetItem: string = '';
  budgetList: string[] = ['Equipment: $500', 'Materials: $300', 'Labor: $1000'];

  addBudgetItem() {
    if (this.budgetItem.trim()) {
      this.budgetList.push(this.budgetItem.trim());
      this.budgetItem = '';
    }
  }

}
