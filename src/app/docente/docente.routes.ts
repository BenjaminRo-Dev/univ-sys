import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DocenteLayoutComponent } from './docente-layout/docente-layout.component';

export const DOCENTE_ROUTES: Routes = [
    {
        path: '', component: DocenteLayoutComponent, children: [
            { path: '', component: InicioComponent },
            // { path: 'calendar', component: CalendarComponent }
        ]
    }
];