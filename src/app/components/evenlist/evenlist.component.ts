import { Component } from '@angular/core';
import { EventlistService } from '../services/eventlist.service';
import { Event } from '../interface/eventlist';

@Component({
  selector: 'app-evenlist',
  templateUrl: './evenlist.component.html',
  styleUrls: ['./evenlist.component.css']
})
export class EvenlistComponent {
  event: string = '';
  eventList: Event[] = [];
  nextId: number = 1;

  constructor(private eventService: EventlistService) {
    this.eventList = this.eventService.getEventList();
  }

  addEvent() {
    if (this.event.trim()) {
      const newEvent: Event = { id: this.nextId++, detail: this.event.trim() };
      this.eventService.addEvent(newEvent);
      this.updateEventList();
      this.event = '';
    }
  }

  removeEvent(id: number) {
    this.eventService.removeEvent(id);
    this.updateEventList();
  }

  private updateEventList() {
    this.eventList = this.eventService.getEventList();
  }
}
