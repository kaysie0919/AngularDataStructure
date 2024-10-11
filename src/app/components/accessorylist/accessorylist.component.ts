import { Component } from '@angular/core';
import { AccessorylistService } from '../services/accessorylist.service';
import { Specification } from '../interface/accessorylist';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrls: ['./accessorylist.component.css']
})
export class AccessorylistComponent {
  accessory: string = '';
  accessoryList: Specification[] = [];
  nextId: number = 4;

  constructor(private accessoryService: AccessorylistService) {
    this.accessoryList = this.accessoryService.getAccessoryList();
  }

  addAccessory() {
    if (this.accessory.trim()) {
      const newAccessory: Specification = { id: this.nextId++, detail: this.accessory.trim() };
      this.accessoryService.addAccessory(newAccessory);
      this.updateAccessoryList();
      this.accessory = '';
    }
  }

  removeAccessory(id: number) {
    this.accessoryService.removeAccessory(id);
    this.updateAccessoryList();
  }

  private updateAccessoryList() {
    this.accessoryList = this.accessoryService.getAccessoryList();
  }
}
