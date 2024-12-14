
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from '../middleware/api.urls';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = apiUrls.moviesApi;
  private moviesdetailsURL = apiUrls.moviesDetailsApi;
  private moviesCategory = apiUrls.moviesCategoryApi; 



  constructor(private http: HttpClient) {}

  // Movies CRUD
  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies`);
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/movies`, movie);
  }

  updateMovie(id: string, movie: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/movies/${id}`, movie);
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/movies/${id}`);
  }

  // Fetch data for categories, genres, characters, and staff
  getCategories(): Observable<any> {
    return this.http.get(`${this.moviesCategory}/categories`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.moviesdetailsURL}/genres`);
  }

  getCharacters(): Observable<any> {
    return this.http.get(`${this.moviesdetailsURL}/characters`);
  }

  getStaff(): Observable<any> {
    return this.http.get(`${this.moviesdetailsURL}/staff`);
  }

  // Cloudinary upload
  uploadToImageCloudinary(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'upload'); 
    return this.http.post(`https://api.cloudinary.com/v1_1/dn4ojhdyh/image/upload`, formData);
  }
  // Cloudinary upload
  uploadToVideoCloudinary(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'videos_presets'); 
    return this.http.post(`https://api.cloudinary.com/v1_1/dn4ojhdyh/video/upload`, formData);
  }
}