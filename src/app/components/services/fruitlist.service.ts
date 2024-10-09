import { Injectable } from '@angular/core';

interface Fruit {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FruitlistService {
  private fruitList: Fruit[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Watermelon' },
    { id: 4, name: 'Strawberry' }
  ];
  private nextId: number = 5;

  getFruits(): Fruit[] {
    return this.fruitList;
  }

  addFruit(name: string) {
    if (name.trim()) {
      const fruit: Fruit = {
        id: this.nextId,
        name: name.trim()
      };
      this.fruitList.push(fruit);
      this.nextId++;
    }
  }

  removeFruit(id: number) {
    this.fruitList = this.fruitList.filter(fruit => fruit.id !== id);
  }
}
