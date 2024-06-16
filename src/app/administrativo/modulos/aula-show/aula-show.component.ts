import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuloService } from '../../../core/services/modulo/modulo.service';

@Component({
  selector: 'app-aula-show',
  standalone: true,
  imports: [],
  templateUrl: './aula-show.component.html',
  styleUrls: ['./aula-show.component.css']
})
export class AulaShowComponent implements OnInit {
  private moduloService = inject(ModuloService);
  private route = inject(ActivatedRoute);
  public nroModulo = '';
  public nroAula = '';

  public horarios: any[] = [];
  public aula: any = {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    if (id) {
      this.moduloService.getAula(parseInt(id))
        .subscribe((response: any) => {
          this.horarios = response.Horarios;
          this.sortHorarios();
          this.aula = response.aula;
          this.nroModulo = response.aula.modulo.numero;
          this.nroAula = response.aula.numero;
          // console.log(response);
          // console.log(this.horarios);
        });
    }
  }

  private dayOrder: { [key: string]: number } = {
    'Lunes': 1,
    'Martes': 2,
    'Miércoles': 3,
    'Miercoles': 3,
    'Jueves': 4,
    'Viernes': 5,
    'Sábado': 6,
    'Sabado': 6,
    'Domingo': 7
  };

  private compare = (a: any, b: any) => {
    if (this.dayOrder[a.dia] !== this.dayOrder[b.dia]) {
      return this.dayOrder[a.dia] - this.dayOrder[b.dia];
    }
    // Si los días son iguales, comparar por hora de inicio
    return a.inicio.localeCompare(b.inicio);
  };

  private sortHorarios(): void {
    this.horarios.sort(this.compare);
  }
}
