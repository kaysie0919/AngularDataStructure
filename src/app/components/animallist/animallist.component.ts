import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animal: string = '';
  animalList: string[] = ['Lion', 'Elephant', 'Giraffe'];

  addAnimal() {
    if (this.animal.trim()) {
      this.animalList.push(this.animal.trim());
      this.animal = '';
    }
  }

}
