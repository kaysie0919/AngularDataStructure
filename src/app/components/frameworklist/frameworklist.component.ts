import { Component } from '@angular/core';
import { FrameworklistService } from '../services/frameworklist.service';
import { Framework } from '../interface/frameworklist';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrls: ['./frameworklist.component.css']
})
export class FrameworklistComponent {
  frameworkName: string = '';
  frameworkList: Framework[] = [];
  nextId: number = 1;

  constructor(private frameworkService: FrameworklistService) {
    this.frameworkList = this.frameworkService.getFrameworkList();
  }

  addFramework() {
    if (this.frameworkName.trim()) {
      const newFramework: Framework = { id: this.nextId++, name: this.frameworkName.trim() };
      this.frameworkService.addFramework(newFramework);
      this.updateFrameworkList();
      this.frameworkName = '';
    }
  }

  removeFramework(id: number) {
    this.frameworkService.removeFramework(id);
    this.updateFrameworkList();
  }

  private updateFrameworkList() {
    this.frameworkList = this.frameworkService.getFrameworkList();
  }
}
