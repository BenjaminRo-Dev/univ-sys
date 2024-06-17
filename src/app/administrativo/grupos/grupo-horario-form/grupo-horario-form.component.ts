import { Component, inject } from '@angular/core';
import { GrupoService } from '../../../core/services/grupo/grupo.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-grupo-horario-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './grupo-horario-form.component.html',
  styleUrl: './grupo-horario-form.component.css'
})
export class GrupoHorarioFormComponent {

  private grupoService = inject(GrupoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  grupos: any[] = [];
  public horarioId: number = 0;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('horarioId');
    if(id){
      this.horarioId = parseInt(id);
    }

    this.grupoService.getGrupos()
      .subscribe((response: any) => {
        this.grupos = response.data;
        // console.log(this.grupos);
      });
    
  }

  //Create - Store
  asignarHorarioAula(grupoId: any){
    // console.log(this.horarioId);
    // console.log(grupoId);

    const objeto = {
      'grupoId' : grupoId,
      'horarioId' : this.horarioId,
    }

    let request = this.grupoService.asignarHorarioAula(objeto);

    request.subscribe({
      next: (response: any) => {
        console.log(response);
        console.log('Horario y aula asignado'); 
        this.router.navigate(['/administrativo/grupos']);
      },
      error: response => {
        // this.hayError = true;
        console.log('Error al guardar');
        console.log(response);
      }
    })
    
  }

}
