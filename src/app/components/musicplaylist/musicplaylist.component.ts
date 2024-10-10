import { Component } from '@angular/core';
import { MusicplaylistService } from '../services/musicplaylist.service';
import { Song } from '../interface/musicplaylist';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrls: ['./musicplaylist.component.css']
})
export class MusicplaylistComponent {
  songName: string = '';
  playlist: Song[] = [];
  nextId: number = 1;

  constructor(private playlistService: MusicplaylistService) {
    this.playlist = this.playlistService.getPlaylist();
  }

  addSong() {
    if (this.songName.trim()) {
      const newSong: Song = { id: this.nextId++, name: this.songName.trim() };
      this.playlistService.addSong(newSong);
      this.updatePlaylist();
      this.songName = '';
    }
  }

  removeSong(id: number) {
    this.playlistService.removeSong(id);
    this.updatePlaylist();
  }

  private updatePlaylist() {
    this.playlist = this.playlistService.getPlaylist();
  }
}
