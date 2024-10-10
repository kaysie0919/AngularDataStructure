import { Component } from '@angular/core';
import { SoftwarelistService } from '../services/softwarelist.service';
import { Software } from '../interface/softwarelist';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrls: ['./softwarelist.component.css']
})
export class SoftwarelistComponent {
  softwareName: string = '';
  softwareList: Software[] = [];
  nextId: number = 1;

  constructor(private softwareService: SoftwarelistService) {
    this.softwareList = this.softwareService.getSoftwareList();
    this.nextId = this.softwareList.length > 0 ? Math.max(...this.softwareList.map(software => software.id)) + 1 : 1;
  }

  addSoftware() {
    if (this.softwareName.trim()) {
      const newSoftware: Software = { id: this.nextId++, name: this.softwareName.trim() };
      this.softwareService.addSoftware(newSoftware);
      this.updateSoftwareList();
      this.softwareName = '';
    }
  }

  removeSoftware(id: number) {
    this.softwareService.removeSoftware(id);
    this.updateSoftwareList();
  }

  private updateSoftwareList() {
    this.softwareList = this.softwareService.getSoftwareList();
  }
}
