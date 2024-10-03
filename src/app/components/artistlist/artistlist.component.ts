import { Component } from '@angular/core';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artist: string = '';
  artistList: string[] = ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci'];

  addArtist() {
    if (this.artist.trim()) {
      this.artistList.push(this.artist.trim());
      this.artist = '';
    }
  }

}
