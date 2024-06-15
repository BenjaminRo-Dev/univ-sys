import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-docente-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './docente-navbar.component.html',
  styleUrl: './docente-navbar.component.css'
})
export class DocenteNavbarComponent {
  public user: any = {};

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    // console.log(this.user);
  }

}
