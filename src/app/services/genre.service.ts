import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from '../middleware/api.urls';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private baseUrl = apiUrls.moviesGenreApi; 

  constructor(private http: HttpClient) {}

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}/genres`);
  }

  addGenre(genre: any): Observable<any> {
    return this.http.post(this.baseUrl, genre);
  }

  updateGenre(id: string, genre: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, genre);
  }

  deleteGenre(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
