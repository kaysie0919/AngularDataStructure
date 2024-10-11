import { Injectable } from '@angular/core';
import { Framework } from '../interface/frameworklist';

@Injectable({
  providedIn: 'root'
})
export class FrameworklistService {
  private frameworkList: Framework[] = [];

  getFrameworkList(): Framework[] {
    return this.frameworkList;
  }

  addFramework(framework: Framework): void {
    this.frameworkList.push(framework);
  }

  removeFramework(id: number): void {
    this.frameworkList = this.frameworkList.filter(framework => framework.id !== id);
  }
}
