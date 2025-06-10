import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirección inicial a login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Ruta de login
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  // Ruta de home
  { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
  // Añadir mascota
  { path: 'add-pet', loadComponent: () => import('./pages/add-pet/add-pet.page').then(m => m.AddPetPage) },
  // Detalle de mascota (recibe parámetro id)
  { path: 'pet-detail/:id', loadComponent: () => import('./pages/pet-detail/pet-detail.page').then(m => m.PetDetailPage) },
  // Seguimiento de vacunas (recibe parámetro id)
  { path: 'vaccine-tracker/:id', loadComponent: () => import('./pages/vaccine-tracker/vaccine-tracker.page').then(m => m.VaccineTrackerPage) },
];