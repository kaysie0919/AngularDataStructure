import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoTitle: string = '';
  videoList: string[] = ['Introduction to Angular', 'Getting Started with TypeScript', 'Angular Directives Explained'];

  addVideo() {
    if (this.videoTitle.trim()) {
      this.videoList.push(this.videoTitle.trim());
      this.videoTitle = '';
    }
  }

}
