import { Component, inject } from '@angular/core';
import { GrupoService } from '../../../core/services/grupo/grupo.service';
import { RouterLink } from '@angular/router';

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
        this.grupos = response.data;
      });
    
  }

}
