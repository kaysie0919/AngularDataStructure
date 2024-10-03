import { Component } from '@angular/core';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopModel: string = '';
  laptopList: string[] = ['Dell XPS 13', 'MacBook Pro', 'HP Spectre x360'];

  addLaptopModel() {
    if (this.laptopModel.trim()) {
      this.laptopList.push(this.laptopModel.trim());
      this.laptopModel = '';
    }
  }

}
