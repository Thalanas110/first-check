import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    data: { animation: 'home' }
  },
  {
    path: 'poem/:id',
    loadComponent: () => import('./poem-detail/poem-detail.component').then(m => m.PoemDetailComponent),
    data: { animation: 'poem' }
  },
  { path: '**', redirectTo: '' }
];
