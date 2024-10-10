import { Injectable } from '@angular/core';
import { Software } from '../interface/softwarelist';

@Injectable({
  providedIn: 'root'
})
export class SoftwarelistService {
  private softwareList: Software[] = [];

  getSoftwareList(): Software[] {
    return this.softwareList;
  }

  addSoftware(software: Software): void {
    this.softwareList.push(software);
  }

  removeSoftware(id: number): void {
    this.softwareList = this.softwareList.filter(software => software.id !== id);
  }
}
