import { Injectable } from '@angular/core';

interface Movie {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  private movieList: Movie[] = [];
  private nextId: number = 1;

  getMovies(): Movie[] {
    return this.movieList;
  }

  addMovie(name: string) {
    if (name.trim()) {
      const movie: Movie = {
        id: this.nextId++,
        name: name.trim()
      };
      this.movieList.push(movie);
    }
  }

  removeMovie(id: number) {
    this.movieList = this.movieList.filter(movie => movie.id !== id);
  }
}
