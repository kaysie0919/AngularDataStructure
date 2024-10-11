import { Injectable } from '@angular/core';
import { Presentation } from '../interface/presentationlist';

@Injectable({
  providedIn: 'root'
})
export class PresentationlistService {
  private presentationList: Presentation[] = [];

  getPresentationList(): Presentation[] {
    return this.presentationList;
  }

  addPresentation(presentation: Presentation): void {
    this.presentationList.push(presentation);
  }

  removePresentation(id: number): void {
    this.presentationList = this.presentationList.filter(presentation => presentation.id !== id);
  }
}
