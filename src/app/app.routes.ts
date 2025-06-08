import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { WebDesignComponent } from './layouts/services/web-design/web-design.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services/web-design', component: WebDesignComponent },
  ];
