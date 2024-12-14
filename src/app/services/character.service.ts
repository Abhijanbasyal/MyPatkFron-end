import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from '../middleware/api.urls';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = apiUrls.moviesDetailsApi;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {

    return this.http.get(`${this.baseUrl}/characters`);
  }

  addCharacter(character: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/characters`, character);

  }

  updateCharacter(id: string, character: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/characters/${id}`, character);

  }

  deleteCharacter(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/characters/${id}`);

  }
}
