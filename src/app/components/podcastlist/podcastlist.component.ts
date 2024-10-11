import { Component } from '@angular/core';
import { PodcastlistService } from '../services/podcastlist.service';
import { Podcast } from '../interface/podcastlist';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrls: ['./podcastlist.component.css']
})
export class PodcastlistComponent {
  episode: string = '';
  podcastList: Podcast[] = [];
  nextId: number = 1;

  constructor(private podcastService: PodcastlistService) {
    this.podcastList = this.podcastService.getPodcastList();
  }

  addEpisode() {
    if (this.episode.trim()) {
      const newPodcast: Podcast = { id: this.nextId++, title: this.episode.trim() };
      this.podcastService.addPodcast(newPodcast);
      this.updatePodcastList();
      this.episode = '';
    }
  }

  removeEpisode(id: number) {
    this.podcastService.removePodcast(id);
    this.updatePodcastList();
  }

  private updatePodcastList() {
    this.podcastList = this.podcastService.getPodcastList();
  }
}
