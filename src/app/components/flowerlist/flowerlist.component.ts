import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flower: string = '';
  flowerList: string[] = ['Roses', 'Lilies', 'Tulips'];

  addFlower() {
    if (this.flower.trim()) {
      this.flowerList.push(this.flower.trim());
      this.flower = '';
    }
  }

}
