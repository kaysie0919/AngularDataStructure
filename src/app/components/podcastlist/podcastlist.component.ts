import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  episode: string = '';
  podcastList: string[] = ['Episode 1: Introduction to Angular', 'Episode 2: Getting Started with TypeScript', 'Episode 3: Understanding Angular Components'];

  addEpisode() {
    if (this.episode.trim()) {
      this.podcastList.push(this.episode.trim());
      this.episode = '';
    }
  }

}
