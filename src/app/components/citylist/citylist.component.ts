import { Component } from '@angular/core';
import { CitylistService } from '../services/citylist.service';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent {
  city: string = '';
  cityList: { id: number; name: string }[] = [];

  constructor(private cityService: CitylistService) {
    this.cityList = this.cityService.getCities();
  }

  addCity() {
    this.cityService.addCity(this.city);
    this.cityList = this.cityService.getCities();
    this.city = '';
  }

  removeCity(id: number) {
    this.cityService.removeCity(id);
    this.cityList = this.cityService.getCities();
  }
}
