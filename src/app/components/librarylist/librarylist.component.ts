import { Component } from '@angular/core';
import { LibrarylistService } from '../services/librarylist.service';
import { Library } from '../interface/librarylist';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrls: ['./librarylist.component.css']
})
export class LibrarylistComponent {
  libraryName: string = '';
  libraryList: Library[] = [];
  nextId: number = 1;

  constructor(private libraryService: LibrarylistService) {
    this.libraryList = this.libraryService.getLibraryList();
  }

  addLibrary() {
    if (this.libraryName.trim()) {
      const newLibrary: Library = { id: this.nextId++, name: this.libraryName.trim() };
      this.libraryService.addLibrary(newLibrary);
      this.updateLibraryList();
      this.libraryName = '';
    }
  }

  removeLibrary(id: number) {
    this.libraryService.removeLibrary(id);
    this.updateLibraryList();
  }

  private updateLibraryList() {
    this.libraryList = this.libraryService.getLibraryList();
  }
}
