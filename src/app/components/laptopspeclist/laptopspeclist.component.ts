import { Component } from '@angular/core';
import { LaptopspecificationlistService } from '../services/laptopspecificationlist.service';
import { Specification } from '../interface/laptopspeclist';

@Component({
  selector: 'app-laptopspeclist',
  templateUrl: './laptopspeclist.component.html',
  styleUrls: ['./laptopspeclist.component.css']
})
export class LaptopspeclistComponent {
  spec: string = '';
  specsList: Specification[] = [];
  nextId: number = 1;

  constructor(private specsService: LaptopspecificationlistService) {
    this.specsList = this.specsService.getSpecsList();
  }

  addSpec() {
    if (this.spec.trim()) {
      const newSpec: Specification = { id: this.nextId++, detail: this.spec.trim() };
      this.specsService.addSpec(newSpec);
      this.updateSpecsList();
      this.spec = '';
    }
  }

  removeSpec(id: number) {
    this.specsService.removeSpec(id);
    this.updateSpecsList();
  }

  private updateSpecsList() {
    this.specsList = this.specsService.getSpecsList();
  }
}
