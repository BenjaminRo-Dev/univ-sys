import { Component, inject } from '@angular/core';
import { CronogramaService } from '../../core/services/cronograma/cronograma.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent {
  
  private cronogramaService = inject(CronogramaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  horarios: any[] = [];

  public usuarioLocal: any = {};

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.usuarioLocal = JSON.parse(storedUser);

      this.cronogramaService.getHorarioById(parseInt(this.usuarioLocal.id))
        .subscribe((response: any) => {
          this.horarios = this.combineConsecutiveHorarios(response.horarios);
          // console.log(this.horarios);
        });
    } else {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }

  private combineConsecutiveHorarios(horarios: any[]): any[] {
    if (!horarios.length) return [];

    // Sort horarios by day, aula, and start time
    horarios.sort((a, b) => {
      const dayOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      const dayComparison = dayOrder.indexOf(a.dia) - dayOrder.indexOf(b.dia);
      if (dayComparison !== 0) return dayComparison;
      
      const aulaComparison = a.aula.id - b.aula.id;
      if (aulaComparison !== 0) return aulaComparison;
      
      return a.inicio.localeCompare(b.inicio);
    });

    const combinedHorarios = [horarios[0]];
    for (let i = 1; i < horarios.length; i++) {
      const last = combinedHorarios[combinedHorarios.length - 1];
      const current = horarios[i];

      if (last.dia === current.dia && 
          last.aula.id === current.aula.id && 
          last.fin === current.inicio) {
        last.fin = current.fin;
      } else {
        combinedHorarios.push(current);
      }
    }

    return combinedHorarios;
  }

  fileName = 'MiHorario.xlsx';
  exportarExcel(): void {

    let data = document.getElementById("tabla-cronograma");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Horarios');
    XLSX.writeFile(wb, this.fileName);
  }

}
