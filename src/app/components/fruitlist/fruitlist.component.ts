import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruit: string = '';
  fruitList: string [] = ["Apple", "Banana", "Watermelon", "Strawberry"];

  Add() {
    this.fruitList.push(this.fruit);
  }

}
