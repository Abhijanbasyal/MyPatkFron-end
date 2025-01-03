import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NepaliComponent } from './pages/nepali/nepali.component';
import { EnglishComponent } from './pages/english/english.component';
import { JapanComponent } from './pages/japan/japan.component';
import { HindiComponent } from './pages/hindi/hindi.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminMovieCategoryComponent } from './pages/admin-movie-category/admin-movie-category.component';
import { MoviesInfoComponent } from './pages/movies-info/movies-info.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nepali-chalchitra', component: NepaliComponent },
    { path: 'hollywood', component: EnglishComponent },
    { path: 'japanese', component: JapanComponent },
    { path: 'bollywood', component: HindiComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignupComponent },
    { path: 'movie-catagory', component:  AdminMovieCategoryComponent, canActivate: [AuthGuard]},
    { path: 'movie/:id', component: MoviesInfoComponent }, 

];
