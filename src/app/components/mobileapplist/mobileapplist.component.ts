import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  appName: string = '';
  appList: string[] = ['WhatsApp', 'Instagram', 'Spotify'];

  addApp() {
    if (this.appName.trim()) {
      this.appList.push(this.appName.trim());
      this.appName = '';
    }
  }

}
