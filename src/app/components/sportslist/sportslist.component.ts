import { Component } from '@angular/core';
import { SportslistService } from '../services/sportslist.service';
import { Sport } from '../interface/sportslist';

@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrls: ['./sportslist.component.css']
})
export class SportslistComponent {
  sportName: string = '';
  sportsList: Sport[] = [];
  nextId: number = 1;

  constructor(private sportsService: SportslistService) {
    this.sportsList = this.sportsService.getSports();
    this.nextId = this.sportsList.length ? Math.max(...this.sportsList.map(s => s.id)) + 1 : 1;
  }

  addSport() {
    if (this.sportName.trim()) {
      const newSport: Sport = { id: this.nextId++, name: this.sportName.trim() };
      this.sportsService.addSport(newSport);
      this.updateSportsList();
      this.sportName = '';
    }
  }

  removeSport(id: number) {
    this.sportsService.removeSport(id);
    this.updateSportsList();
  }

  private updateSportsList() {
    this.sportsList = this.sportsService.getSports();
  }
}
