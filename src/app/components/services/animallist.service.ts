import { Injectable } from '@angular/core';
import { Animal } from '../interface/animallist';

@Injectable({
  providedIn: 'root'
})
export class AnimallistService {
  private animals: Animal[] = [];

  getAnimals(): Animal[] {
    return this.animals;
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  removeAnimal(id: number): void {
    this.animals = this.animals.filter(animal => animal.id !== id);
  }
}
