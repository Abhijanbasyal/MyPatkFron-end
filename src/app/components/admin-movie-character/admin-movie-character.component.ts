

import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-movie-character',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-movie-character.component.html',
  styleUrl: './admin-movie-character.component.css'
})
export class AdminMovieCharacterComponent implements OnInit {
  characters: any[] = [];
  newCharacter = { name: '', role: '', description: '' };
  editCharacterId: string | null = null;
  editCharacter = { name: '', role: '', description: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (data) => (this.characters = data),
      (error) => (this.errorMessage = 'Failed to load characters.')
    );
  }

  addCharacter(): void {
    if (!this.newCharacter.name.trim()) return;

    this.characterService.addCharacter(this.newCharacter).subscribe(
      (data) => {
        this.successMessage = 'Character added successfully!';
        this.characters.push(data);
        this.newCharacter = { name: '', role: '', description: '' };
      },
      (error) => (this.errorMessage = 'Failed to add character.')
    );
  }

  editCharacterDetails(character: any): void {
    this.editCharacterId = character._id;
    this.editCharacter = { ...character };
  }

  saveCharacter(): void {
    if (!this.editCharacter.name.trim() || !this.editCharacterId) return;

    this.characterService.updateCharacter(this.editCharacterId, this.editCharacter).subscribe(
      (data) => {
        this.successMessage = 'Character updated successfully!';
        this.characters = this.characters.map((char) =>
          char._id === data._id ? data : char
        );
        this.editCharacterId = null;
        this.editCharacter = { name: '', role: '', description: '' };
      },
      (error) => (this.errorMessage = 'Failed to update character.')
    );
  }

  deleteCharacter(id: string): void {
    if (!confirm('Are you sure you want to delete this character?')) return;

    this.characterService.deleteCharacter(id).subscribe(
      () => {
        this.successMessage = 'Character deleted successfully!';
        this.characters = this.characters.filter((char) => char._id !== id);
      },
      (error) => (this.errorMessage = 'Failed to delete character.')
    );
  }
}

