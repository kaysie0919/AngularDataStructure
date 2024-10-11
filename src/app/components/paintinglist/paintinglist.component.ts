import { Component } from '@angular/core';
import { PaintinglistService } from '../services/paintinglist.service';
import { Painting } from '../interface/paintinglist';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrls: ['./paintinglist.component.css']
})
export class PaintinglistComponent {
  painting: string = '';
  paintingList: Painting[] = [];
  nextId: number = 1;

  constructor(private paintingService: PaintinglistService) {
    this.paintingList = this.paintingService.getPaintingList();
  }

  addPainting() {
    if (this.painting.trim()) {
      const newPainting: Painting = { id: this.nextId++, name: this.painting.trim() };
      this.paintingService.addPainting(newPainting);
      this.updatePaintingList();
      this.painting = '';
    }
  }

  removePainting(id: number) {
    this.paintingService.removePainting(id);
    this.updatePaintingList();
  }

  private updatePaintingList() {
    this.paintingList = this.paintingService.getPaintingList();
  }
}
