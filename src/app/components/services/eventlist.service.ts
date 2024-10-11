import { Injectable } from '@angular/core';
import { Event } from '../interface/eventlist';

@Injectable({
  providedIn: 'root'
})
export class EventlistService {
  private eventList: Event[] = [];

  getEventList(): Event[] {
    return this.eventList;
  }

  addEvent(event: Event): void {
    this.eventList.push(event);
  }

  removeEvent(id: number): void {
    this.eventList = this.eventList.filter(event => event.id !== id);
  }
}
