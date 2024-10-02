import { Component } from '@angular/core';

@Component({
  selector: 'app-vagetablelist',
  templateUrl: './vagetablelist.component.html',
  styleUrl: './vagetablelist.component.css'
})
export class VagetablelistComponent {
  vegetable: string = '';
  vegetableList: string[] = ['Carrot', 'Broccoli', 'Spinach'];

  addVegetable() {
    if (this.vegetable.trim()) {
      this.vegetableList.push(this.vegetable.trim());
      this.vegetable = '';
    }
  }

}
