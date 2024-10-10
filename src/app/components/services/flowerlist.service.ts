import { Injectable } from '@angular/core';
import { Flower } from '../interface/flowerlist';

@Injectable({
  providedIn: 'root'
})
export class FlowerlistService {
  private flowerList: Flower[] = [];

  getFlowerList(): Flower[] {
    return this.flowerList;
  }

  addFlower(flower: Flower): void {
    this.flowerList.push(flower);
  }

  removeFlower(id: number): void {
    this.flowerList = this.flowerList.filter(flower => flower.id !== id);
  }
}
