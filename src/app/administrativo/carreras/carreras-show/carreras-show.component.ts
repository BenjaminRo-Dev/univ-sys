import { Component, inject } from '@angular/core';
import { CarreraService } from '../../../core/services/carrera/carrera.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carreras-show',
  standalone: true,
  imports: [],
  templateUrl: './carreras-show.component.html',
  styleUrl: './carreras-show.component.css'
})
export class CarrerasShowComponent {
  private carreraService = inject(CarreraService);
  private route = inject(ActivatedRoute);
  public siglaCarrera = '';

  carrera: any = {};
  materias: any[] = [];

  ngOnInit(): void {
    const sigla = this.route.snapshot.paramMap.get('sigla') ?? '';

    if(sigla){
      this.carreraService.getMaterias(sigla)
        .subscribe((response: any) => {
          this.carrera = response.carrera;
          this.materias = response.materias;
          // this.siglaCarrera = response.sigla;
          // console.log(response);
        });
    }
  }

}
