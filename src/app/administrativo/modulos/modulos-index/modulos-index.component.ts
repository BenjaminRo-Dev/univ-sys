import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModuloService } from '../../../core/services/modulo/modulo.service';

@Component({
  selector: 'app-modulos-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './modulos-index.component.html',
  styleUrl: './modulos-index.component.css'
})
export class ModulosIndexComponent {

  private moduloService = inject(ModuloService);

  modulos: any[] = [];

  ngOnInit(): void {
    this.moduloService.getModulos()
      .subscribe((response: any) => {
        this.modulos = response.data;
      });
    
  }

}
