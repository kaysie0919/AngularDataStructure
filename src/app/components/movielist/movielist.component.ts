import { Component } from '@angular/core';
import { MovielistService } from '../services/movielist.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  movie: string = '';
  movieList: { id: number; name: string }[] = [];

  constructor(private movieService: MovielistService) {
    this.movieList = this.movieService.getMovies();
  }

  addMovie() {
    this.movieService.addMovie(this.movie);
    this.movieList = this.movieService.getMovies();
    this.movie = '';
  }

  removeMovie(id: number) {
    this.movieService.removeMovie(id);
    this.movieList = this.movieService.getMovies();
  }
}
