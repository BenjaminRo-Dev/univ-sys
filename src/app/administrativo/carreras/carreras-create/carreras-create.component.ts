import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FacultadService } from '../../../core/services/facultad/facultad.service';
import { CarreraService } from '../../../core/services/carrera/carrera.service';
import { NotificationService } from '../../../core/services/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carreras-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './carreras-create.component.html',
  styleUrl: './carreras-create.component.css'
})
export class CarrerasCreateComponent {

  private notificationService = inject(NotificationService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  facultadService = inject(FacultadService);
  carreraService = inject(CarreraService);

  facultades: any [] = [];
  carrera = {};
  hayError: boolean = false;

  form = this.fb.group({
    name: [''],
    sigla: [''],
    facultad: ['']
  });

  ngOnInit(): void {
    this.getFacultades();
  }

  getFacultades(){
    this.facultadService.getFacultades()
      .subscribe((response: any) => {
        this.facultades = response.data;
      })
  }

  create(){
    // console.log(this.form.value)
    let request = this.carreraService.storeCarrera(this.form.value);

    request.subscribe({
      next: (response: any) => {
        // console.log(response);
        this.router.navigate(['/administrativo/carreras']);
        this.notificationService.changeMessage('Guardado');
      }
    })
  }

}
