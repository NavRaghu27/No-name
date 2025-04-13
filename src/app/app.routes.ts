import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
        pathMatch: 'full'
    }
];
