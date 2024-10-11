import { Injectable } from '@angular/core';
import { Artist } from '../interface/artistlist';

@Injectable({
  providedIn: 'root'
})
export class ArtistlistService {
  private artistList: Artist[] = [];

  getArtistList(): Artist[] {
    return this.artistList;
  }

  addArtist(artist: Artist): void {
    this.artistList.push(artist);
  }

  removeArtist(id: number): void {
    this.artistList = this.artistList.filter(artist => artist.id !== id);
  }
}
