import { Component } from '@angular/core';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destination: string = '';
  destinationList: string[] = ['Paris', 'Tokyo', 'New York'];

  addDestination() {
    if (this.destination.trim()) {
      this.destinationList.push(this.destination.trim());
      this.destination = '';
    }
  }

}
