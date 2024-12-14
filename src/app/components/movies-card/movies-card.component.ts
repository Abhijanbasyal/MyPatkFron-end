

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-card',
  imports: [CommonModule],
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css'],
})
export class MoviesCardComponent {
  @Input() movie: any; 

}

