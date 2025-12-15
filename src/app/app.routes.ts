import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'operators',
    loadComponent: () => import('./components/operators/operators').then(m => m.Operators)
},
{
    path: '',
    redirectTo: 'operators',
    pathMatch: 'full'
}
];