import { Component, inject } from '@angular/core';
import { GrupoService } from '../../../core/services/grupo/grupo.service';
import { RouterLink } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-grupos-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './grupos-index.component.html',
  styleUrl: './grupos-index.component.css'
})
export class GruposIndexComponent {

  private grupoService = inject(GrupoService);

  grupos: any[] = [];

  ngOnInit(): void {
    this.grupoService.getGrupos()
      .subscribe((response: any) => {
        this.grupos = response.data.map((grupo: any) => {
          if (grupo.horarios && grupo.horarios.length > 0) {
            const uniqueHorarios = this.combineConsecutiveHorarios(grupo.horarios);
            return { ...grupo, horarios: uniqueHorarios };
          }
          return grupo;
        });
        console.log(this.grupos);
      });
  }

  private combineConsecutiveHorarios(horarios: any[]): any[] {
    if (!horarios.length) return [];

    // Sort horarios by day and start time
    horarios.sort((a, b) => {
      const dayOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      const dayComparison = dayOrder.indexOf(a.dia) - dayOrder.indexOf(b.dia);
      if (dayComparison !== 0) return dayComparison;
      return a.inicio.localeCompare(b.inicio);
    });

    const combinedHorarios = [horarios[0]];
    for (let i = 1; i < horarios.length; i++) {
      const last = combinedHorarios[combinedHorarios.length - 1];
      const current = horarios[i];
      if (last.dia === current.dia && last.fin === current.inicio) {
        last.fin = current.fin;
      } else {
        combinedHorarios.push(current);
      }
    }

    return combinedHorarios;
  }

  fileName = 'MaestroOferta.xlsx';
  exportarExcel(): void {

    let data = document.getElementById("tabla-grupos");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.grupos);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Grupos');
    XLSX.writeFile(wb, this.fileName);
  }


}














// import { Component, inject } from '@angular/core';
// import { GrupoService } from '../../../core/services/grupo/grupo.service';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-grupos-index',
//   standalone: true,
//   imports: [RouterLink],
//   templateUrl: './grupos-index.component.html',
//   styleUrl: './grupos-index.component.css'
// })
// export class GruposIndexComponent {

//   private grupoService = inject(GrupoService);

//   grupos: any[] = [];

//   ngOnInit(): void {
//     this.grupoService.getGrupos()
//       .subscribe((response: any) => {
//         this.grupos = response.data;
//         console.log(this.grupos);
//       });
    
//   }

// }
