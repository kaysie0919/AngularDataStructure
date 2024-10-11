import { Injectable } from '@angular/core';
import { Painting } from '../interface/paintinglist';

@Injectable({
  providedIn: 'root'
})
export class PaintinglistService {
  private paintingList: Painting[] = [];

  getPaintingList(): Painting[] {
    return this.paintingList;
  }

  addPainting(painting: Painting): void {
    this.paintingList.push(painting);
  }

  removePainting(id: number): void {
    this.paintingList = this.paintingList.filter(painting => painting.id !== id);
  }
}
