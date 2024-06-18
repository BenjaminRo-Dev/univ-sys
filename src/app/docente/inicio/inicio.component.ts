import { Component } from '@angular/core';
import { AsistenciaGuardarComponent } from "../asistencia/asistencia-guardar/asistencia-guardar.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [AsistenciaGuardarComponent]
})
export class InicioComponent {

}
