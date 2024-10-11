import { Injectable } from '@angular/core';
import { Podcast } from '../interface/podcastlist';

@Injectable({
  providedIn: 'root'
})
export class PodcastlistService {
  private podcastList: Podcast[] = [];

  getPodcastList(): Podcast[] {
    return this.podcastList;
  }

  addPodcast(podcast: Podcast): void {
    this.podcastList.push(podcast);
  }

  removePodcast(id: number): void {
    this.podcastList = this.podcastList.filter(podcast => podcast.id !== id);
  }
}
