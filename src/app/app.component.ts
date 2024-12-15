import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminMovieCharacterComponent } from './components/admin-movie-character/admin-movie-character.component';
import { AdminMoviesStaffComponent } from './components/admin-movies-staff/admin-movies-staff.component';
import { AdminMoviesComponent } from './components/admin-movies/admin-movies.component';




@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
  
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Moviepark';

}
