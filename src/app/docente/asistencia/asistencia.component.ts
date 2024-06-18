import { Component, inject } from '@angular/core';
import { AsistenciaService } from '../../core/services/asistencia/asistencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  standalone: true,
  imports: [],
  templateUrl: './asistencia.component.html',
  styleUrl: './asistencia.component.css'
})
export class AsistenciaComponent {

  private asistenciaService = inject(AsistenciaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  asistencias: any[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('userId') ?? '';
    
    this.asistenciaService.getHorarioById(parseInt(id))
      .subscribe((response: any) => {
        this.asistencias = response.data;
        console.log(this.asistencias);
      })

  }

}
