import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent {
  framework: string = '';
  frameworkList: string[] = ['Angular', 'React', 'Vue.js'];

  addFramework() {
    if (this.framework.trim()) {
      this.frameworkList.push(this.framework.trim());
      this.framework = '';
    }
  }

}
