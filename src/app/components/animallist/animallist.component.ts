import { Component } from '@angular/core';
import { AnimallistService } from '../services/animallist.service';
import { Animal } from '../interface/animallist';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.css']
})
export class AnimallistComponent {
  animalName: string = '';
  animalList: Animal[] = [];
  nextId: number = 1;

  constructor(private animalService: AnimallistService) {
    this.animalList = this.animalService.getAnimals();
    this.nextId = this.animalList.length ? Math.max(...this.animalList.map(s => s.id)) + 1 : 1;
  }

  addAnimal() {
    if (this.animalName.trim()) {
      const newAnimal: Animal = { id: this.nextId++, name: this.animalName.trim() };
      this.animalService.addAnimal(newAnimal);
      this.updateAnimalList();
      this.animalName = '';
    }
  }

  removeAnimal(id: number) {
    this.animalService.removeAnimal(id);
    this.updateAnimalList();
  }

  private updateAnimalList() {
    this.animalList = this.animalService.getAnimals();
  }
}
