import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from '../middleware/api.urls';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = apiUrls.moviesCategoryApi; 

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categories`, category);
  }

  updateCategory(id: string, category: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/categories/${id}`, category);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/categories/${id}`);
  }
}
