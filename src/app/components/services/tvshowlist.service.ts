import { Injectable } from '@angular/core';
import { TVShow } from '../interface/tvshowlist';

@Injectable({
  providedIn: 'root'
})
export class TvshowlistService {
  private tvShowList: TVShow[] = [];

  getTVShowList(): TVShow[] {
    return this.tvShowList;
  }

  addTVShow(tvShow: TVShow): void {
    this.tvShowList.push(tvShow);
  }

  removeTVShow(id: number): void {
    this.tvShowList = this.tvShowList.filter(show => show.id !== id);
  }
}
