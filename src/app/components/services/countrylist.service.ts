import { Injectable } from '@angular/core';

interface Country {
  continent: string;
  countries: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CountrylistService {
  private countryList: Country[] = [
    { continent: 'Asia', countries: ['China', 'India', 'Japan'] },
    { continent: 'Europe', countries: ['Germany', 'France', 'Italy'] },
    { continent: 'Africa', countries: ['Nigeria', 'Kenya', 'South Africa'] }
  ];

  getCountries(): Country[] {
    return this.countryList;
  }

  addCountry(continent: string, country: string) {
    if (country.trim() && continent.trim()) {
      const continentObj = this.countryList.find(c => c.continent === continent);
      if (continentObj) {
        continentObj.countries.push(country.trim());
      } else {
        this.countryList.push({ continent: continent.trim(), countries: [country.trim()] });
      }
    }
  }
}
