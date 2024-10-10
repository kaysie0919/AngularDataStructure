import { Injectable } from '@angular/core';
import { Specification } from '../interface/laptopspeclist';

@Injectable({
  providedIn: 'root'
})
export class LaptopspecificationlistService {
  private specsList: Specification[] = [];

  getSpecsList(): Specification[] {
    return this.specsList;
  }

  addSpec(spec: Specification): void {
    this.specsList.push(spec);
  }

  removeSpec(id: number): void {
    this.specsList = this.specsList.filter(spec => spec.id !== id);
  }
}
