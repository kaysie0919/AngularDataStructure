import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  building: string = '';
  buildingList: string[] = ['Library', 'Science Lab', 'Administration Block'];

  addBuilding() {
    if (this.building.trim()) {
      this.buildingList.push(this.building.trim());
      this.building = '';
    }
  }

}
