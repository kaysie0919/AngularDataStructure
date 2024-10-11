import { Injectable } from '@angular/core';
import { Building } from '../interface/buildinglist';

@Injectable({
  providedIn: 'root'
})
export class BuildinglistService {
  private buildingList: Building[] = [];

  getBuildingList(): Building[] {
    return this.buildingList;
  }

  addBuilding(building: Building): void {
    this.buildingList.push(building);
  }

  removeBuilding(id: number): void {
    this.buildingList = this.buildingList.filter(building => building.id !== id);
  }
}
