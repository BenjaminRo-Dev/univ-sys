import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FacultadService } from '../../../core/services/facultad/facultad.service';

@Component({
  selector: 'app-facultades-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './facultades-index.component.html',
  styleUrl: './facultades-index.component.css'
})
export class FacultadesIndexComponent {
  private facultadService = inject(FacultadService);

  facultades: any[] = [];

  ngOnInit(): void {
    this.facultadService.getFacultades()
      .subscribe((response: any) => {
        this.facultades = response.data;
      });
    
  }
}
