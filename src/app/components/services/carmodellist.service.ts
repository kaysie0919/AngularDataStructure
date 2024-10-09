import { Injectable } from '@angular/core';

interface CarModel {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarmodellistService {
  private carModelList: CarModel[] = [];
  private nextId: number = 1;

  getCarModels(): CarModel[] {
    return this.carModelList;
  }

  addCarModel(name: string) {
    if (name.trim()) {
      const carModel: CarModel = {
        id: this.nextId++,
        name: name.trim()
      };
      this.carModelList.push(carModel);
    }
  }

  removeCarModel(id: number) {
    this.carModelList = this.carModelList.filter(carModel => carModel.id !== id);
  }
}
