import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
         loadComponent: () => import('./components/profile/profile').then(c => c.Profile),
        pathMatch: 'full'
    }
];
