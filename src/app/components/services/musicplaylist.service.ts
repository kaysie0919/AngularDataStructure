import { Injectable } from '@angular/core';
import { Song } from '../interface/musicplaylist';

@Injectable({
  providedIn: 'root'
})
export class MusicplaylistService {
  private playlist: Song[] = [];

  getPlaylist(): Song[] {
    return this.playlist;
  }

  addSong(song: Song): void {
    this.playlist.push(song);
  }

  removeSong(id: number): void {
    this.playlist = this.playlist.filter(song => song.id !== id);
  }
}
