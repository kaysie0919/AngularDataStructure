import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  title: string = '';
  author: string = '';
  genre: string = '';
  booknumber: string = '';
  booklist: string[] = [];

  addItem() {
    if (this.title.trim() && this.author.trim() && this.genre.trim() && this.booknumber.trim()) {
      const bookInfo = `Book Title: ${this.title.trim()}  | Author: ${this.author.trim()} | Genre: ${this.genre.trim()} | Book Number: ${this.booknumber.trim()}`;
      this.booklist.push(bookInfo);

      this.title = '';
      this.author = '';
      this.genre = '';
      this.booknumber = '';
    }
    else {
      return;
    }
  }

}
