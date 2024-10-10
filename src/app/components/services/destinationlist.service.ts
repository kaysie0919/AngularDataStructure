import { Injectable } from '@angular/core';
import { Destination } from '../interface/destinationlist';

@Injectable({
  providedIn: 'root'
})
export class DestinationlistService {
  private destinationList: Destination[] = [];

  getDestinationList(): Destination[] {
    return this.destinationList;
  }

  addDestination(destination: Destination): void {
    this.destinationList.push(destination);
  }

  removeDestination(id: number): void {
    this.destinationList = this.destinationList.filter(destination => destination.id !== id);
  }
}
