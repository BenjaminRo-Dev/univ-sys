import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarreraService } from '../../../core/services/carrera/carrera.service';

@Component({
  selector: 'app-carreras-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carreras-index.component.html',
  styleUrl: './carreras-index.component.css'
})
export class CarrerasIndexComponent {
  private carreraService = inject(CarreraService);

  carreras: any[] = [];

  ngOnInit(): void {
    this.carreraService.getCarreras()
      .subscribe((response: any) => {
        this.carreras = response.data;
        // console.log(this.carreras);
      });
  }

}
