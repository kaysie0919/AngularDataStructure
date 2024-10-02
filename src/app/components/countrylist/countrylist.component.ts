import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  country: string = '';
  continent: string = '';
  countryList: { continent: string; countries: string[] }[] = [
    { continent: 'Asia', countries: ['China', 'India', 'Japan'] },
    { continent: 'Europe', countries: ['Germany', 'France', 'Italy'] },
    { continent: 'Africa', countries: ['Nigeria', 'Kenya', 'South Africa'] }
  ];

  addCountry() {
    if (this.country.trim() && this.continent.trim()) {
      const continentObj = this.countryList.find(c => c.continent === this.continent);
      if (continentObj) {
        continentObj.countries.push(this.country.trim());
      }
      this.country = '';
      this.continent = '';
    }
  }
}
