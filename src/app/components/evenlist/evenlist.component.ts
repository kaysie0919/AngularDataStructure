import { Component } from '@angular/core';

@Component({
  selector: 'app-evenlist',
  templateUrl: './evenlist.component.html',
  styleUrl: './evenlist.component.css'
})
export class EvenlistComponent {
  event: string = '';
  eventList: string[] = ['Hackathon: 5th Nov', 'Tech Conference: 10th Nov', 'Music Festival: 15th Nov'];

  addEvent() {
    if (this.event.trim()) {
      this.eventList.push(this.event.trim());
      this.event = '';
    }
  }

}
