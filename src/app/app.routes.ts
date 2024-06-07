import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
        // canActivate: [loggedGuard],
    },
    {
        path: 'administrativo',
        loadChildren: () => import('./administrativo/admin.routes').then(m => m.ADMIN_ROUTES),
    },
    {
        path: 'docente',
        loadChildren: () => import('./docente/docente.routes').then(m => m.DOCENTE_ROUTES),
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];
