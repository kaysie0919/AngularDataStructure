import { Component } from '@angular/core';
import { ComposerlistService } from '../services/composerlist.service';
import { Composer } from '../interface/composerlist';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrls: ['./composerlist.component.css']
})
export class ComposerlistComponent {
  composer: string = '';
  composerList: Composer[] = [];
  nextId: number = 1;

  constructor(private composerService: ComposerlistService) {
    this.composerList = this.composerService.getComposerList();
  }

  addComposer() {
    if (this.composer.trim()) {
      const newComposer: Composer = { id: this.nextId++, name: this.composer.trim() };
      this.composerService.addComposer(newComposer);
      this.updateComposerList();
      this.composer = '';
    }
  }

  removeComposer(id: number) {
    this.composerService.removeComposer(id);
    this.updateComposerList();
  }

  private updateComposerList() {
    this.composerList = this.composerService.getComposerList();
  }
}
