

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getUserDetails();
    if (user && (user.roles === 'ADMIN' || user.roles === 'STAFF')) {
      return true; // Allow navigation
    }
    alert('Access Denied: You do not have permission to access this page.');
    this.router.navigate(['/']); // Redirect to the home page
    return false; // Block navigation
  }
}
