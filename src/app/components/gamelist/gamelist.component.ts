import { Component } from '@angular/core';
import { GamelistService } from '../services/gamelist.service';
import { Game } from '../interface/gamelist';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent {
  gameName: string = '';
  gameList: Game[] = [];
  nextId: number = 4;

  constructor(private gameService: GamelistService) {
    this.gameList = this.gameService.getGames();
    this.nextId = this.gameList.length > 0 ? Math.max(...this.gameList.map(game => game.id)) + 1 : 1;
  }

  addGame() {
    if (this.gameName.trim()) {
      const newGame: Game = { id: this.nextId++, name: this.gameName.trim() };
      this.gameService.addGame(newGame);
      this.updateGameList();
      this.gameName = '';
    }
  }

  removeGame(id: number) {
    this.gameService.removeGame(id);
    this.updateGameList();
  }

  private updateGameList() {
    this.gameList = this.gameService.getGames();
  }
}
