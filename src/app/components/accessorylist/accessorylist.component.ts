import { Component } from '@angular/core';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessory: string = '';
  accessoryList: string[] = ['Phone Case', 'Screen Protector', 'Charger'];

  addAccessory() {
    if (this.accessory.trim()) {
      this.accessoryList.push(this.accessory.trim());
      this.accessory = '';
    }
  }

}
