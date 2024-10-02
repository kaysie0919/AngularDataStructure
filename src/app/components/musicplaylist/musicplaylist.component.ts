import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  song: string = '';
  playlist: string[] = ['Shape of You', 'Blinding Lights', 'Dance Monkey'];

  addSong() {
    if (this.song.trim()) {
      this.playlist.push(this.song.trim());
      this.song = '';
    }
  }

}
