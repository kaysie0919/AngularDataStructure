import { Injectable } from '@angular/core';
import { Composer } from '../interface/composerlist';

@Injectable({
  providedIn: 'root'
})
export class ComposerlistService {
  private composerList: Composer[] = [];

  getComposerList(): Composer[] {
    return this.composerList;
  }

  addComposer(composer: Composer): void {
    this.composerList.push(composer);
  }

  removeComposer(id: number): void {
    this.composerList = this.composerList.filter(composer => composer.id !== id);
  }
}
