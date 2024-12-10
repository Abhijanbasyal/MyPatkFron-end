import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NepaliComponent } from './pages/nepali/nepali.component';
import { EnglishComponent } from './pages/english/english.component';
import { JapanComponent } from './pages/japan/japan.component';
import { HindiComponent } from './pages/hindi/hindi.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nepali-chalchitra', component: NepaliComponent },
    { path: 'hollywood', component: EnglishComponent },
    { path: 'japanese', component: JapanComponent },
    { path: 'bollywood', component: HindiComponent },
];
