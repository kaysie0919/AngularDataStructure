import { Component } from '@angular/core';
import { DestinationlistService } from '../services/destinationlist.service';
import { Destination } from '../interface/destinationlist';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrls: ['./destinationlist.component.css']
})
export class DestinationlistComponent {
  destination: string = '';
  destinationList: Destination[] = [];
  nextId: number = 1;

  constructor(private destinationlistService: DestinationlistService) {
    this.destinationList = this.destinationlistService.getDestinationList();
  }

  addDestination() {
    if (this.destination.trim()) {
      const newDestination: Destination = { id: this.nextId++, name: this.destination.trim() };
      this.destinationlistService.addDestination(newDestination);
      this.updateDestinationList();
      this.destination = '';
    }
  }

  removeDestination(id: number) {
    this.destinationlistService.removeDestination(id);
    this.updateDestinationList();
  }

  private updateDestinationList() {
    this.destinationList = this.destinationlistService.getDestinationList();
  }
}
