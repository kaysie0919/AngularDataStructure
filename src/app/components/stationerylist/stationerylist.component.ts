import { Component } from '@angular/core';
import { StationerylistService } from '../services/stationerylist.service';
import { StationeryItem } from '../interface/stationerylist';

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrls: ['./stationerylist.component.css']
})
export class StationerylistComponent {
  stationeryItem: string = '';
  stationeryList: StationeryItem[] = [];
  nextId: number = 1;

  constructor(private stationerylistService: StationerylistService) {
    this.stationeryList = this.stationerylistService.getStationeryList();
  }

  addStationeryItem() {
    if (this.stationeryItem.trim()) {
      const newItem: StationeryItem = { id: this.nextId++, name: this.stationeryItem.trim() };
      this.stationerylistService.addStationery(newItem);
      this.updateStationeryList();
      this.stationeryItem = '';
    }
  }

  removeStationeryItem(id: number) {
    this.stationerylistService.removeStationery(id);
    this.updateStationeryList();
  }

  private updateStationeryList() {
    this.stationeryList = this.stationerylistService.getStationeryList();
  }
}
