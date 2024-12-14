
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-movies',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-movies.component.html',
  styleUrl: './admin-movies.component.css'
})
export class AdminMoviesComponent implements OnInit {
  movies: any[] = [];
  categories: any[] = [];
  genres: any[] = [];
  characters: any[] = [];
  staff: any[] = [];
  filteredCharacters: any[] = [];
  filteredStaff: any[] = [];
  selectedCategories: string[] = [];
  selectedGenres: string[] = [];
  selectedCharacters: string[] = [];
  selectedStaff: string[] = [];
  characterSearchQuery = '';
  staffSearchQuery = '';
  newMovie = {
    title: '',
    description: '',
    releasedOn: '',
    duration: '',
    parental: '',
    socialMedia: {
      twitter: '',
      instagram: '',
      reddit: '',
      youtube: '',
      facebook: '',
    },
    categories: [] as string[],
    genres: [] as string[],
    characters: [] as string[],
    staff: [] as string[],
    imagesUrl: '',
    videosUrl: '',
  };
  successMessage = '';
  errorMessage = '';

  editingMovieId: string | null = null; // Tracks the movie being edited


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.movieService.getMovies().subscribe((data) => (this.movies = data));
    this.movieService.getCategories().subscribe((data) => (this.categories = data));
    this.movieService.getGenres().subscribe((data) => (this.genres = data));
    // this.movieService.getCharacters().subscribe((data) => (this.characters = data));
    // this.movieService.getStaff().subscribe((data) => (this.staff = data));
    this.movieService.getCharacters().subscribe((data) => {
      this.characters = data;
      this.filteredCharacters = data; // Initialize filtered list
    });
    this.movieService.getStaff().subscribe((data) => {
      this.staff = data;
      this.filteredStaff = data; // Initialize filtered list
    });
  }

  toggleSelection(list: string[], id: string): void {
    if (list.includes(id)) {
      const index = list.indexOf(id);
      list.splice(index, 1);
    } else {
      list.push(id);
    }
  }

  //for characters search
  searchCharacters(): void {
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(this.characterSearchQuery.toLowerCase())
    );
  }

//for staff search
  searchStaff(): void {
    this.filteredStaff = this.staff.filter((staff) =>
      staff.name.toLowerCase().includes(this.staffSearchQuery.toLowerCase())
    );
  }

  // Call search methods when search query changes
  ngOnChanges(): void {
    this.searchCharacters();
    this.searchStaff();
  }

  //upload image using cloudinary
  uploadImage(event: any): void {
    const file = event.target.files[0];
    this.movieService.uploadToImageCloudinary(file).subscribe(
      (response) => (this.newMovie.imagesUrl = response.secure_url),
      (error) => (this.errorMessage = 'Failed to upload image.')
    );
  }

  //upload video using cloudinary
  uploadVideo(event: any): void {
    const file = event.target.files[0];
    this.movieService.uploadToVideoCloudinary(file).subscribe(
      (response) => (this.newMovie.videosUrl = response.secure_url),
      (error) => (this.errorMessage = 'Failed to upload video.')
    );
  }

  //adding movie

  addMovie(): void {
    this.newMovie.categories = this.selectedCategories;
    this.newMovie.genres = this.selectedGenres;
    this.newMovie.characters = this.selectedCharacters;
    this.newMovie.staff = this.selectedStaff;

    // Map imagesUrl and videosUrl
    const payload = {
      ...this.newMovie,
      imagesUrl: this.newMovie.imagesUrl,
      videosUrl: this.newMovie.videosUrl,
    };

    this.movieService.addMovie(payload).subscribe(
      (data) => {
        this.successMessage = 'Movie added successfully!';
        this.movies.push(data);
        this.resetForm();
      },
      (error) => (this.errorMessage = 'Failed to add movie.')
    );
  }

  resetForm(): void {
    this.newMovie = {
      title: '',
      description: '',
      releasedOn: '',
      duration: '',
      parental: '',
      socialMedia: {
        twitter: '',
        instagram: '',
        reddit: '',
        youtube: '',
        facebook: '',
      },
      categories: [],
      genres: [],
      characters: [],
      staff: [],
      imagesUrl: '',
      videosUrl: '',
    };
    this.selectedCategories = [];
    this.selectedGenres = [];
    this.selectedCharacters = [];
    this.selectedStaff = [];
    this.characterSearchQuery = '';
    this.staffSearchQuery = '';
    this.filteredCharacters = this.characters;
    this.filteredStaff = this.staff;
  }


  deleteMovie(movieId: string): void {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.movieService.deleteMovie(movieId).subscribe(
        () => {
          // Remove the movie from the local list after successful deletion
          this.movies = this.movies.filter((movie) => movie._id !== movieId);
          this.successMessage = 'Movie deleted successfully!';
          setTimeout(() => (this.successMessage = ''), 3000); // Clear the message after 3 seconds
        },
        (error) => {
          this.errorMessage = 'Failed to delete movie.';
          setTimeout(() => (this.errorMessage = ''), 3000); // Clear the message after 3 seconds
        }
      );
    }
  }

  
  

}
