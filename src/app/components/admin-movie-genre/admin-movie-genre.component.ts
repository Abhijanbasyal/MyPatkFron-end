

import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-movie-genre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-movie-genre.component.html',
  styleUrl: './admin-movie-genre.component.css'
})
export class AdminMovieGenreComponent implements OnInit {
  genres: any[] = [];
  newGenreName: string = '';
  editGenreId: string | null = null;
  editGenreName: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres(): void {
    this.genreService.getGenres().subscribe(
      (data) => (this.genres = data),
      (error) => (this.errorMessage = 'Failed to load genres.')
    );
  }

  addGenre(): void {
    if (!this.newGenreName.trim()) return;

    this.genreService.addGenre({ name: this.newGenreName }).subscribe(
      (data) => {
        this.successMessage = 'Genre added successfully!';
        this.genres.push(data);
        this.newGenreName = '';
      },
      (error) => (this.errorMessage = 'Failed to add genre.')
    );
  }

  editGenre(genre: any): void {
    this.editGenreId = genre._id;
    this.editGenreName = genre.name;
  }

  saveGenre(): void {
    if (!this.editGenreName.trim() || !this.editGenreId) return;

    this.genreService.updateGenre(this.editGenreId, { name: this.editGenreName }).subscribe(
      (data) => {
        this.successMessage = 'Genre updated successfully!';
        this.genres = this.genres.map((gen) =>
          gen._id === data._id ? data : gen
        );
        this.editGenreId = null;
        this.editGenreName = '';
      },
      (error) => (this.errorMessage = 'Failed to update genre.')
    );
  }

  deleteGenre(id: string): void {
    if (!confirm('Are you sure you want to delete this genre?')) return;

    this.genreService.deleteGenre(id).subscribe(
      () => {
        this.successMessage = 'Genre deleted successfully!';
        this.genres = this.genres.filter((gen) => gen._id !== id);
      },
      (error) => (this.errorMessage = 'Failed to delete genre.')
    );
  }
}
