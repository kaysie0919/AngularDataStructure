import { Component } from '@angular/core';
import { ComputerhardwarelistService } from '../services/computerhardwarelist.service';
import { Hardware } from '../interface/computerhardwarelist';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrls: ['./computerhardwarelist.component.css']
})
export class ComputerhardwarelistComponent {
  hardware: string = '';
  hardwareList: Hardware[] = [];
  nextId: number = 1;

  constructor(private hardwareService: ComputerhardwarelistService) {
    this.hardwareList = this.hardwareService.getHardwareList();
  }

  addHardware() {
    if (this.hardware.trim()) {
      const newHardware: Hardware = { id: this.nextId++, detail: this.hardware.trim() };
      this.hardwareService.addHardware(newHardware);
      this.updateHardwareList();
      this.hardware = '';
    }
  }

  removeHardware(id: number) {
    this.hardwareService.removeHardware(id);
    this.updateHardwareList();
  }

  private updateHardwareList() {
    this.hardwareList = this.hardwareService.getHardwareList();
  }
}
