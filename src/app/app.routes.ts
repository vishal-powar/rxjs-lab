import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'operators',
        loadComponent: () => import('./components/operators/operators').then(m => m.Operators)
    },
    {
        path: '',
        redirectTo: 'operators',
        pathMatch: 'full'
    },
    {
        path: 'multiple-api-calls',
        loadComponent: () => import('./components/multiple-api-calls/multiple-api-calls').then(m => m.MultipleApiCalls)
    }
];