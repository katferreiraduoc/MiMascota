import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'add-pet',
    loadComponent: () => import('./pages/add-pet/add-pet.page').then( m => m.AddPetPage)
  },
  {
    path: 'pet-detail',
    loadComponent: () => import('./pages/pet-detail/pet-detail.page').then( m => m.PetDetailPage)
  },
  {
    path: 'vaccine-tracker',
    loadComponent: () => import('./pages/vaccine-tracker/vaccine-tracker.page').then( m => m.VaccineTrackerPage)
  },
];
