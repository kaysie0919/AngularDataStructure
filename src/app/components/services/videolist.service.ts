import { Injectable } from '@angular/core';
import { Video } from '../interface/videolist';

@Injectable({
  providedIn: 'root'
})
export class VideolistService {
  private videoList: Video[] = [];

  getVideoList(): Video[] {
    return this.videoList;
  }

  addVideo(video: Video): void {
    this.videoList.push(video);
  }

  removeVideo(id: number): void {
    this.videoList = this.videoList.filter(video => video.id !== id);
  }
}
