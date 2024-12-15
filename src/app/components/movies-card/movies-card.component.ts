

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css'],
})
export class MoviesCardComponent {
  @Input() movie: any; 

}

