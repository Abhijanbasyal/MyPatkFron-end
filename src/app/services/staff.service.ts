import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from '../middleware/api.urls';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private baseUrl = apiUrls.moviesDetailsApi;

  constructor(private http: HttpClient) { }

  getStaff(): Observable<any> {
    return this.http.get(`${this.baseUrl}/staff`);

  }

  addStaff(staff: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/staff`, staff);
  }

  updateStaff(id: string, staff: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/staff/${id}`, staff);
  }

  deleteStaff(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/staff/${id}`);

  }
}
