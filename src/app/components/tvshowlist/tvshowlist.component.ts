import { Component } from '@angular/core';
import { TvshowlistService } from '../services/tvshowlist.service';
import { TVShow } from '../interface/tvshowlist';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrls: ['./tvshowlist.component.css']
})
export class TvshowlistComponent {
  tvShow: string = '';
  tvShowList: TVShow[] = [];
  nextId: number = 1;

  constructor(private tvShowService: TvshowlistService) {
    this.tvShowList = this.tvShowService.getTVShowList();
  }

  addTVShow() {
    if (this.tvShow.trim()) {
      const newShow: TVShow = { id: this.nextId++, title: this.tvShow.trim() };
      this.tvShowService.addTVShow(newShow);
      this.updateTVShowList();
      this.tvShow = '';
    }
  }

  removeTVShow(id: number) {
    this.tvShowService.removeTVShow(id);
    this.updateTVShowList();
  }

  private updateTVShowList() {
    this.tvShowList = this.tvShowService.getTVShowList();
  }
}
