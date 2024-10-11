import { Component } from '@angular/core';
import { BuildinglistService } from '../services/buildinglist.service';
import { Building } from '../interface/buildinglist';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrls: ['./buildinglist.component.css']
})
export class BuildinglistComponent {
  building: string = '';
  buildingList: Building[] = [];
  nextId: number = 1;

  constructor(private buildingService: BuildinglistService) {
    this.buildingList = this.buildingService.getBuildingList();
  }

  addBuilding() {
    if (this.building.trim()) {
      const newBuilding: Building = { id: this.nextId++, name: this.building.trim() };
      this.buildingService.addBuilding(newBuilding);
      this.updateBuildingList();
      this.building = '';
    }
  }

  removeBuilding(id: number) {
    this.buildingService.removeBuilding(id);
    this.updateBuildingList();
  }

  private updateBuildingList() {
    this.buildingList = this.buildingService.getBuildingList();
  }
}
