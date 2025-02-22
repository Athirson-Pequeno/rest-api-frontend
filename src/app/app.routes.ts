import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sectors',
    loadComponent: () =>
      import('./sectors/sectors.component').then((m) => m.SectorsComponent),
  },
  {
    path: 'sectors/add',
    loadComponent: () =>
      import('./sectors/sector-form/sector-form.component').then((m) => m.SectorFormComponent),
  },
];
