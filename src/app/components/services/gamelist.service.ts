import { Injectable } from '@angular/core';
import { Game } from '../interface/gamelist';

@Injectable({
  providedIn: 'root'
})
export class GamelistService {
  private games: Game[] = [];

  getGames(): Game[] {
    return this.games;
  }

  addGame(game: Game): void {
    this.games.push(game);
  }

  removeGame(id: number): void {
    this.games = this.games.filter(game => game.id !== id);
  }
}
