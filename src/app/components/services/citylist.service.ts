import { Injectable } from '@angular/core';

interface City {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CitylistService {
  private cityList: City[] = [];
  private nextId: number = 1;

  getCities(): City[] {
    return this.cityList;
  }

  addCity(name: string) {
    if (name.trim()) {
      const city: City = {
        id: this.nextId++,
        name: name.trim()
      };
      this.cityList.push(city);
    }
  }

  removeCity(id: number) {
    this.cityList = this.cityList.filter(city => city.id !== id);
  }
}
