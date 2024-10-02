import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  software: string = '';
  softwareList: string[] = ['Microsoft Office', 'Adobe Photoshop', 'Visual Studio Code'];

  addSoftware() {
    if (this.software.trim()) {
      this.softwareList.push(this.software.trim());
      this.software = '';
    }
  }

}
