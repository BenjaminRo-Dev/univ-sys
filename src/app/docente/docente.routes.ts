import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DocenteLayoutComponent } from './docente-layout/docente-layout.component';
import { HorarioComponent } from './horario/horario.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';

export const DOCENTE_ROUTES: Routes = [
    {
        path: '', component: DocenteLayoutComponent, children: [
            { path: '', component: InicioComponent },
            { path: 'inicio', component: InicioComponent },
            { path: 'horario', component: HorarioComponent },
            { path: 'asistencia', component: AsistenciaComponent },
        ]
    }
];