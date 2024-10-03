import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspeclist',
  templateUrl: './laptopspeclist.component.html',
  styleUrl: './laptopspeclist.component.css'
})
export class LaptopspeclistComponent {
  spec: string = '';
  specsList: string[] = ['16GB RAM, Intel i7', '8GB RAM, AMD Ryzen 5', '512GB SSD, Intel i5'];

  addSpec() {
    if (this.spec.trim()) {
      this.specsList.push(this.spec.trim());
      this.spec = '';
    }
  }

}
