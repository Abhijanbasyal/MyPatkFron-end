

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-info',
  imports: [CommonModule],
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css'],
})
export class MoviesInfoComponent implements OnInit {
  movie: any = null; // Store movie details
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id'); // Get movie ID from URL
    if (movieId) {
      this.fetchMovieDetails(movieId);
    }
  }

  fetchMovieDetails(id: string): void {
    this.movieService.getMovieById(id).subscribe(
      (data) => {
        this.movie = data; // Assign movie data
      },
      (error) => {
        console.error('Error fetching movie details:', error);
        this.errorMessage = 'Failed to fetch movie details.';
      }
    );
  }
}

