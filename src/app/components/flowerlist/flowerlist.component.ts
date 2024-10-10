import { Component } from '@angular/core';
import { FlowerlistService } from '../services/flowerlist.service';
import { Flower } from '../interface/flowerlist';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrls: ['./flowerlist.component.css']
})
export class FlowerlistComponent {
  flower: string = '';
  flowerList: Flower[] = [];
  nextId: number = 1;
  
  constructor(private flowerlistService: FlowerlistService) {
    this.flowerList = this.flowerlistService.getFlowerList();
  }

  addFlower() {
    if (this.flower.trim()) {
      const newFlower: Flower = { id: this.nextId++, name: this.flower.trim() };
      this.flowerlistService.addFlower(newFlower);
      this.updateFlowerList();
      this.flower = '';
    }
  }

  removeFlower(id: number) {
    this.flowerlistService.removeFlower(id);
    this.updateFlowerList();
  }

  private updateFlowerList() {
    this.flowerList = this.flowerlistService.getFlowerList();
  }
}
