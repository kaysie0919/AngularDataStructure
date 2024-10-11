import { Component } from '@angular/core';
import { VideolistService } from '../services/videolist.service';
import { Video } from '../interface/videolist';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent {
  videoTitle: string = '';
  videoList: Video[] = [];
  nextId: number = 1;

  constructor(private videoService: VideolistService) {
    this.videoList = this.videoService.getVideoList();
  }

  addVideo() {
    if (this.videoTitle.trim()) {
      const newVideo: Video = { id: this.nextId++, title: this.videoTitle.trim() };
      this.videoService.addVideo(newVideo);
      this.updateVideoList();
      this.videoTitle = '';
    }
  }

  removeVideo(id: number) {
    this.videoService.removeVideo(id);
    this.updateVideoList();
  }

  private updateVideoList() {
    this.videoList = this.videoService.getVideoList();
  }
}
