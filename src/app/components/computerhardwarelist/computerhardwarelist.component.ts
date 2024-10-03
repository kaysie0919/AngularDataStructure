import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  hardware: string = '';
  hardwareList: string[] = ['Motherboard', 'CPU', 'RAM', 'Graphics Card'];

  addHardware() {
    if (this.hardware.trim()) {
      this.hardwareList.push(this.hardware.trim());
      this.hardware = '';
    }
  }

}
