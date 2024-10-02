import { Component } from '@angular/core';

@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {
  sport: string = '';
  sportsList: string[] = ['Soccer', 'Basketball', 'Tennis'];

  addSport() {
    if (this.sport.trim()) {
      this.sportsList.push(this.sport.trim());
      this.sport = '';
    }
  }

}
