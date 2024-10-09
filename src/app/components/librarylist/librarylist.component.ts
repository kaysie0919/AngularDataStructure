import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  library: string = '';
  libraryList: string[] = ['RxJS', 'Lodash', 'Moment.js'];

  addLibrary() {
    if (this.library.trim()) {
      this.libraryList.push(this.library.trim());
      this.library = '';
    }
  }

}
