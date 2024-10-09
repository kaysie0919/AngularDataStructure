import { Injectable } from '@angular/core';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  bookNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  private bookList: Book[] = [];
  private nextId: number = 1;

  getBooks(): Book[] {
    return this.bookList;
  }

  addBook(title: string, author: string, genre: string, bookNumber: string) {
    if (title.trim() && author.trim() && genre.trim() && bookNumber.trim()) {
      const book: Book = {
        id: this.nextId++,
        title: title.trim(),
        author: author.trim(),
        genre: genre.trim(),
        bookNumber: bookNumber.trim()
      };
      this.bookList.push(book);
    }
  }

  removeBook(id: number) {
    this.bookList = this.bookList.filter(book => book.id !== id);
  }
}
