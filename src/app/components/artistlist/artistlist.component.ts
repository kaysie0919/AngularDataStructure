import { Component } from '@angular/core';
import { ArtistlistService } from '../services/artistlist.service';
import { Artist } from '../interface/artistlist';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.css']
})
export class ArtistlistComponent {
  artist: string = '';
  artistList: Artist[] = [];
  nextId: number = 1;

  constructor(private artistService: ArtistlistService) {
    this.artistList = this.artistService.getArtistList();
  }

  addArtist() {
    if (this.artist.trim()) {
      const newArtist: Artist = { id: this.nextId++, name: this.artist.trim() };
      this.artistService.addArtist(newArtist);
      this.updateArtistList();
      this.artist = '';
    }
  }

  removeArtist(id: number) {
    this.artistService.removeArtist(id);
    this.updateArtistList();
  }

  private updateArtistList() {
    this.artistList = this.artistService.getArtistList();
  }
}
