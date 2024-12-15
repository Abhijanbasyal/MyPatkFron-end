import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);


  loginForm !: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    }

    )
  }


  login() {
    console.log(this.loginForm.value);
    this.authService.loginService(this.loginForm.value)
      .subscribe({
        next: (res) => {
          if (res?.user?.id) {
            alert("Login is Success");
            console.log(res.user.id)
            // localStorage.setItem("user_id", res.user.id);   
            localStorage.setItem('user_id', JSON.stringify(res.user)); // Saving the user data   
            this.authService.isLoggedIn$.next(true);       
            this.router.navigate(['']);
            this.loginForm.reset();
          } else {
            alert('Login failed: User data not found.');
            console.error('Invalid response format:', res);
          }
        },
        error: (err) => {
          alert(err.error.message);
          console.error('Login error:', err);
        }
      });
  }

}
