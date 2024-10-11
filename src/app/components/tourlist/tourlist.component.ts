import { Component } from '@angular/core';
import { TourlistService } from '../services/tourlist.service';
import { Tour } from '../interface/tourlist';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent {
  tourDate: string = '';
  tourList: Tour[] = [];
  nextId: number = 1;

  constructor(private tourService: TourlistService) {
    this.tourList = this.tourService.getTourList();
  }

  addTourDate() {
    if (this.tourDate.trim()) {
      const newTour: Tour = { id: this.nextId++, date: this.tourDate.trim() };
      this.tourService.addTour(newTour);
      this.updateTourList();
      this.tourDate = '';
    }
  }

  removeTour(id: number) {
    this.tourService.removeTour(id);
    this.updateTourList();
  }

  private updateTourList() {
    this.tourList = this.tourService.getTourList();
  }
}
