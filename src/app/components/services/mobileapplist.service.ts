import { Injectable } from '@angular/core';
import { App } from '../interface/mobileapplist';

@Injectable({
  providedIn: 'root'
})
export class MobileapplistService {
  private appList: App[] = [];

  getAppList(): App[] {
    return this.appList;
  }

  addApp(app: App): void {
    this.appList.push(app);
  }

  removeApp(id: number): void {
    this.appList = this.appList.filter(app => app.id !== id);
  }
}
