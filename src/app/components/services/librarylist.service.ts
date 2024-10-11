import { Injectable } from '@angular/core';
import { Library } from '../interface/librarylist';

@Injectable({
  providedIn: 'root'
})
export class LibrarylistService {
  private libraryList: Library[] = [];
  
  getLibraryList(): Library[] {
    return this.libraryList;
  }

  addLibrary(library: Library): void {
    this.libraryList.push(library);
  }

  removeLibrary(id: number): void {
    this.libraryList = this.libraryList.filter(library => library.id !== id);
  }
}
