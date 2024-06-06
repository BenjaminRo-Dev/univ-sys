import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocenteNavbarComponent } from '../docente-navbar/docente-navbar.component';

@Component({
  selector: 'app-docente-layout',
  standalone: true,
  imports: [RouterOutlet, DocenteNavbarComponent],
  templateUrl: './docente-layout.component.html',
  styleUrl: './docente-layout.component.css'
})
export class DocenteLayoutComponent {

}
