import { Injectable } from '@angular/core';
import { StationeryItem } from '../interface/stationerylist';

@Injectable({
  providedIn: 'root'
})
export class StationerylistService {
  private stationeryList: StationeryItem[] = [];

  getStationeryList(): StationeryItem[] {
    return this.stationeryList;
  }

  addStationery(item: StationeryItem): void {
    this.stationeryList.push(item);
  }

  removeStationery(id: number): void {
    this.stationeryList = this.stationeryList.filter(item => item.id !== id);
  }
}
