import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ModuloService } from '../../../core/services/modulo/modulo.service';

@Component({
  selector: 'app-modulos-show',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './modulos-show.component.html',
  styleUrl: './modulos-show.component.css'
})
export class ModulosShowComponent {
  private moduloService = inject(ModuloService);
  private route = inject(ActivatedRoute);
  public nroModulo = '';

  aulas: any[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    // this.nroModulo = this.route.snapshot.paramMap.get('id') ?? '';

    if(id){
      this.moduloService.getAulas(parseInt(id))
        .subscribe((response: any) => {
          this.aulas = response.aulas;
          this.nroModulo = response.modulo.numero;
          // console.log(response);
        });
    }
  }


}
