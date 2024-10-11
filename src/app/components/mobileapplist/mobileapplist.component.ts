import { Component } from '@angular/core';
import { MobileapplistService } from '../services/mobileapplist.service';
import { App } from '../interface/mobileapplist';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrls: ['./mobileapplist.component.css']
})
export class MobileapplistComponent {
  appName: string = '';
  appList: App[] = [];
  nextId: number = 1;

  constructor(private appService: MobileapplistService) {
    this.appList = this.appService.getAppList();
  }

  addApp() {
    if (this.appName.trim()) {
      const newApp: App = { id: this.nextId++, name: this.appName.trim() };
      this.appService.addApp(newApp);
      this.updateAppList();
      this.appName = '';
    }
  }

  removeApp(id: number) {
    this.appService.removeApp(id);
    this.updateAppList();
  }

  private updateAppList() {
    this.appList = this.appService.getAppList();
  }
}
