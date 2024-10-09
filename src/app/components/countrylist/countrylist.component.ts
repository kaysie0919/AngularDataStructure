import { Component } from '@angular/core';
import { CountrylistService } from '../services/countrylist.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent {
  country: string = '';
  continent: string = '';
  countryList: { continent: string; countries: string[] }[] = [];

  constructor(private countryService: CountrylistService) {
    this.countryList = this.countryService.getCountries();
  }

  addCountry() {
    this.countryService.addCountry(this.continent, this.country);
    this.countryList = this.countryService.getCountries();
    this.country = '';
    this.continent = '';
  }
}
