

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { MoviesCardComponent } from '../../components/movies-card/movies-card.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MoviesCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any[] = []; // Store movies data

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  // Fetch movies from the API
  fetchMovies(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data; // Assign data to movies
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
