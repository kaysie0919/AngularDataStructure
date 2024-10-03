import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  tvShow: string = '';
  tvShowList: string[] = ['Stranger Things', 'The Crown', 'Breaking Bad'];

  addTVShow() {
    if (this.tvShow.trim()) {
      this.tvShowList.push(this.tvShow.trim());
      this.tvShow = '';
    }
  }

}
