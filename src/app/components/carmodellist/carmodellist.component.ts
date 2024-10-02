import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModel: string = '';
  carModelList: string[] = ['Tesla Model S', 'Ford Mustang', 'BMW X5'];

  addCarModel() {
    if (this.carModel.trim()) {
      this.carModelList.push(this.carModel.trim());
      this.carModel = '';
    }
  }

}
