import { Component } from '@angular/core';
import { CarmodellistService } from '../services/carmodellist.service';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrls: ['./carmodellist.component.css']
})
export class CarmodellistComponent {
  carModel: string = '';
  carModelList: { id: number; name: string }[] = [];

  constructor(private carModelService: CarmodellistService) {
    this.carModelList = this.carModelService.getCarModels();
  }

  addCarModel() {
    this.carModelService.addCarModel(this.carModel);
    this.carModelList = this.carModelService.getCarModels();
    this.carModel = '';
  }

  removeCarModel(id: number) {
    this.carModelService.removeCarModel(id);
    this.carModelList = this.carModelService.getCarModels();
  }
}
