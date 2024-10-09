import { Component } from '@angular/core';
import { FruitlistService } from '../services/fruitlist.service';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrls: ['./fruitlist.component.css']
})
export class FruitlistComponent {
  fruit: string = '';
  fruitList: { id: number; name: string }[] = [];

  constructor(private fruitService: FruitlistService) {
    this.fruitList = this.fruitService.getFruits();
  }

  addFruit() {
    this.fruitService.addFruit(this.fruit);
    this.fruit = '';
    this.fruitList = this.fruitService.getFruits();
  }

  removeFruit(id: number) {
    this.fruitService.removeFruit(id);
    this.fruitList = this.fruitService.getFruits();
  }
}
