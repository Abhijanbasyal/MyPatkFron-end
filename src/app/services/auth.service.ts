import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiUrls } from '../middleware/api.urls';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  isLoggedIn$ = new BehaviorSubject<boolean>(false);


  registerService(registerObj: any) {
    return this.http.post<any>(`${apiUrls.authServiceApi}sign-up`, registerObj);
  }

  loginService(loginObj: any) {
    return this.http.post<any>(`${apiUrls.authServiceApi}sign-in`, loginObj, { withCredentials: true });

  }

  getUserDetails() {
    const user = localStorage.getItem('user_id');
    return user ? JSON.parse(user) : null; // Parse user data from local storage
  }
  

  isLoggedIn() {
    return !!localStorage.getItem("user_id");
  }
}
