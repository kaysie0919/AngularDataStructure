import { Injectable } from '@angular/core';
import { Hardware } from '../interface/computerhardwarelist';

@Injectable({
  providedIn: 'root'
})
export class ComputerhardwarelistService {
  private hardwareList: Hardware[] = [];

  getHardwareList(): Hardware[] {
    return this.hardwareList;
  }

  addHardware(hardware: Hardware): void {
    this.hardwareList.push(hardware);
  }

  removeHardware(id: number): void {
    this.hardwareList = this.hardwareList.filter(hardware => hardware.id !== id);
  }
}
