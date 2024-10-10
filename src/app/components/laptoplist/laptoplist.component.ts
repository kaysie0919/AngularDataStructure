import { Component } from '@angular/core';
import { LaptoplistService } from '../services/laptoplist.service';
import { Laptop } from '../interface/laptoplist';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrls: ['./laptoplist.component.css']
})
export class LaptoplistComponent {
  laptopModel: string = '';
  laptopList: Laptop[] = [];
  nextId: number = 1;

  constructor(private laptoplistService: LaptoplistService) {
    this.laptopList = this.laptoplistService.getLaptopList();
  }

  addLaptopModel() {
    if (this.laptopModel.trim()) {
      const newLaptop: Laptop = { id: this.nextId++, model: this.laptopModel.trim() };
      this.laptoplistService.addLaptop(newLaptop);
      this.updateLaptopList();
      this.laptopModel = '';
    }
  }

  removeLaptop(id: number) {
    this.laptoplistService.removeLaptop(id);
    this.updateLaptopList();
  }

  private updateLaptopList() {
    this.laptopList = this.laptoplistService.getLaptopList();
  }
}
