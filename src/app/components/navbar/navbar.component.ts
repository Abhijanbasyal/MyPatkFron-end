import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  authService = inject(AuthService);
  isLoggedIn: boolean = false;
  showDropdown: boolean = false;
  router = inject(Router);


  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(res => {
      this.isLoggedIn = this.authService.isLoggedIn();
    })


    // Listen to router navigation events to close dropdown
    this.router.events.subscribe(() => {
      this.showDropdown = false; 
    });

  }






  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }


  isAdminOrStaff(): boolean {
    const user = this.authService.getUserDetails();
    return user && (user.roles === 'ADMIN' || user.roles === 'STAFF');
  }


  logout() {
    localStorage.removeItem("user_id");
    this.authService.isLoggedIn$.next(false);
    this.showDropdown = false;
    this.router.navigate(['']);

  }

}
