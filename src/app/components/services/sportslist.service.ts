import { Injectable } from '@angular/core';
import { Sport } from '../interface/sportslist';

@Injectable({
  providedIn: 'root'
})
export class SportslistService {
  private sports: Sport[] = [];

  getSports(): Sport[] {
    return this.sports;
  }

  addSport(sport: Sport): void {
    this.sports.push(sport);
  }

  removeSport(id: number): void {
    this.sports = this.sports.filter(sport => sport.id !== id);
  }
}
