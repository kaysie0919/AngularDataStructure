import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  painting: string = '';
  paintingList: string[] = ['Mona Lisa', 'Starry Night', 'The Scream'];

  addPainting() {
    if (this.painting.trim()) {
      this.paintingList.push(this.painting.trim());
      this.painting = '';
    }
  }

}
