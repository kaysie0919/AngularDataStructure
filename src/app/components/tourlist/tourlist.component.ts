import { Component } from '@angular/core';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tourDate: string = '';
  tourList: string[] = ['New York: 10th Oct', 'Los Angeles: 15th Oct', 'Chicago: 20th Oct'];

  addTourDate() {
    if (this.tourDate.trim()) {
      this.tourList.push(this.tourDate.trim());
      this.tourDate = '';
    }
  }

}
