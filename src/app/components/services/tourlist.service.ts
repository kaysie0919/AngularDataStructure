import { Injectable } from '@angular/core';
import { Tour } from '../interface/tourlist';

@Injectable({
  providedIn: 'root'
})
export class TourlistService {
  private tourList: Tour[] = [];

  getTourList(): Tour[] {
    return this.tourList;
  }

  addTour(tour: Tour): void {
    this.tourList.push(tour);
  }

  removeTour(id: number): void {
    this.tourList = this.tourList.filter(tour => tour.id !== id);
  }
}
