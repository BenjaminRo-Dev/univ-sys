import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ModulosIndexComponent } from './modulos/modulos-index/modulos-index.component';
import { UsuariosIndexComponent } from './usuarios/usuarios-index/usuarios-index.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: '', component: DashboardComponent },
            { path: 'dashboard', component: DashboardComponent},
            { path: 'modulos', component: ModulosIndexComponent },
            { path: 'usuarios', component: UsuariosIndexComponent},
        ]
    }
];