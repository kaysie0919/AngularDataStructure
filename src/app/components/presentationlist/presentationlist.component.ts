import { Component } from '@angular/core';
import { PresentationlistService } from '../services/presentationlist.service';
import { Presentation } from '../interface/presentationlist';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrls: ['./presentationlist.component.css']
})
export class PresentationlistComponent {
  topic: string = '';
  presentationList: Presentation[] = [];
  nextId: number = 1;

  constructor(private presentationService: PresentationlistService) {
    this.presentationList = this.presentationService.getPresentationList();
  }

  addTopic() {
    if (this.topic.trim()) {
      const newPresentation: Presentation = { id: this.nextId++, topic: this.topic.trim() };
      this.presentationService.addPresentation(newPresentation);
      this.updatePresentationList();
      this.topic = '';
    }
  }

  removePresentation(id: number) {
    this.presentationService.removePresentation(id);
    this.updatePresentationList();
  }

  private updatePresentationList() {
    this.presentationList = this.presentationService.getPresentationList();
  }
}
