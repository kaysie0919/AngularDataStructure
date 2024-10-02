import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movie: string = '';
  movieList: string[] = ['Inception', 'The Dark Knight', 'Interstellar']; // Predefined list of movies

  addMovie() {
    if (this.movie.trim()) {
      this.movieList.push(this.movie.trim());
      this.movie = '';
    }
  }

}
