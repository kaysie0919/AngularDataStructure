import { Component } from '@angular/core';
import { BooklistService } from '../services/booklist.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  title: string = '';
  author: string = '';
  genre: string = '';
  bookNumber: string = '';
  bookList: { id: number; title: string; author: string; genre: string; bookNumber: string }[] = [];

  constructor(private bookService: BooklistService) {
    this.bookList = this.bookService.getBooks();
  }

  addItem() {
    this.bookService.addBook(this.title, this.author, this.genre, this.bookNumber);
    this.bookList = this.bookService.getBooks();
    this.title = '';
    this.author = '';
    this.genre = '';
    this.bookNumber = '';
  }

  removeItem(id: number) {
    this.bookService.removeBook(id);
    this.bookList = this.bookService.getBooks();
  }
}
