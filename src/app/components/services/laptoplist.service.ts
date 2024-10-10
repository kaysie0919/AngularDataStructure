import { Injectable } from '@angular/core';
import { Laptop } from '../interface/laptoplist';

@Injectable({
  providedIn: 'root'
})
export class LaptoplistService {
  private laptopList: Laptop[] = [];

  getLaptopList(): Laptop[] {
    return this.laptopList;
  }

  addLaptop(laptop: Laptop): void {
    this.laptopList.push(laptop);
  }

  removeLaptop(id: number): void {
    this.laptopList = this.laptopList.filter(laptop => laptop.id !== id);
  }
}
