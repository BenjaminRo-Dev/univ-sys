import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ModulosIndexComponent } from './modulos/modulos-index/modulos-index.component';
import { UsuariosIndexComponent } from './usuarios/usuarios-index/usuarios-index.component';
import { UsuariosCreateComponent } from './usuarios/usuarios-create/usuarios-create.component';
import { ModulosCreateComponent } from './modulos/modulos-create/modulos-create.component';
import { FacultadesIndexComponent } from './facultades/facultades-index/facultades-index.component';
import { FacultadesCreateComponent } from './facultades/facultades-create/facultades-create.component';
import { CarrerasIndexComponent } from './carreras/carreras-index/carreras-index.component';
import { CarrerasCreateComponent } from './carreras/carreras-create/carreras-create.component';
import { ModulosShowComponent } from './modulos/modulos-show/modulos-show.component';
import { CarrerasShowComponent } from './carreras/carreras-show/carreras-show.component';
import { PerfilComponent } from '../auth/perfil/perfil.component';
import { GruposIndexComponent } from './grupos/grupos-index/grupos-index.component';
import { GruposCreateComponent } from './grupos/grupos-create/grupos-create.component';
import { AulaShowComponent } from './modulos/aula-show/aula-show.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: '', component: DashboardComponent },
            { path: 'dashboard', component: DashboardComponent},

            { path: 'modulos', component: ModulosIndexComponent },
            { path: 'modulos/create', component: ModulosCreateComponent },
            { path: 'modulos/:id', component: ModulosShowComponent},
            { path: 'aula/:id', component: AulaShowComponent},

            { path: 'carreras', component: CarrerasIndexComponent},
            { path: 'carreras/create', component: CarrerasCreateComponent},
            { path: 'carreras/:sigla', component: CarrerasShowComponent},

            { path: 'usuarios', component: UsuariosIndexComponent},
            { path: 'usuarios/:id', component: PerfilComponent},
            { path: 'usuarios/create', component: UsuariosCreateComponent},

            { path: 'facultades', component: FacultadesIndexComponent},
            // { path: 'facultades/:id', component: FacultadesIndexComponent},
            { path: 'facultades/create', component: FacultadesCreateComponent},

            { path: 'grupos', component: GruposIndexComponent},
            { path: 'grupos/create', component: GruposCreateComponent},
            
            
        ]
    }
];