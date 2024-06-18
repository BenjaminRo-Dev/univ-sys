import { Component, inject } from '@angular/core';
import { NotificationService } from '../../../core/services/notification/notification.service';
import { Router } from '@angular/router';
import { AsistenciaService } from '../../../core/services/asistencia/asistencia.service';

@Component({
  selector: 'app-asistencia-guardar',
  standalone: true,
  imports: [],
  templateUrl: './asistencia-guardar.component.html',
  styleUrl: './asistencia-guardar.component.css'
})
export class AsistenciaGuardarComponent {
  private notificationService = inject(NotificationService);
  private router = inject(Router);
  asistenciaService = inject(AsistenciaService);

  hayError: boolean = false;
  public usuarioLocal: any = {};
  private asistencia = {};

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      this.usuarioLocal = JSON.parse(storedUser);
    }else{
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }

  guardarAsistencia(){
    this.asistencia = {
      "userId": this.usuarioLocal.id,
      "estado": "Presente"
    }

    let requeste = this.asistenciaService.storeAsistencia(this.asistencia);

    requeste.subscribe({
      next: (response: any) => {
        this.notificationService.changeMessage('Asistencia registrada');
        console.log(response);
      },
      error: response => {
        // this.hayError = true;
        this.notificationService.changeMessage('No tiene clases en este momento');

        // console.log(response);
      }
    })
    
  }

}
