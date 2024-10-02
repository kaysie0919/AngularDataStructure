import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  game: string = '';
  gameList: string[] = ['The Legend of Zelda', 'Super Mario Bros', 'Minecraft'];

  addGame() {
    if (this.game.trim()) {
      this.gameList.push(this.game.trim());
      this.game = '';
    }
  }

}
