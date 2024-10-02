import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  city: string = '';
  cityList: string[] = ['New York', 'Los Angeles', 'London'];

  addCity() {
    if (this.city.trim()) {
      this.cityList.push(this.city.trim());
      this.city = '';
    }
  }

}
