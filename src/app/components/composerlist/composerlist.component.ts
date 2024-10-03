import { Component } from '@angular/core';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composer: string = '';
  composerList: string[] = ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach'];

  addComposer() {
    if (this.composer.trim()) {
      this.composerList.push(this.composer.trim());
      this.composer = '';
    }
  }

}
