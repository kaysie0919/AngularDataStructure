import { Component } from '@angular/core';

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent {
  stationeryItem: string = '';
  stationeryList: string[] = ['Pen', 'Notebook', 'Stapler'];

  addStationeryItem() {
    if (this.stationeryItem.trim()) {
      this.stationeryList.push(this.stationeryItem.trim());
      this.stationeryItem = '';
    }
  }

}
