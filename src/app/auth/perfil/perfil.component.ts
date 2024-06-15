import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public usuarioLocal: any = {};
  public user: any = {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    
    // Parsear el usuario local de localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.usuarioLocal = JSON.parse(storedUser);
    }

    // console.log('Usuario local: ', this.usuarioLocal);

    if (id) {
      this.userService.getUserById(parseInt(id))
        .subscribe((response: any) => {
          this.user = response.data;
          // console.log(response.data);
        });
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  volverAInicio(): void {
    if (this.usuarioLocal.rol === 'ADMIN') {
      this.router.navigate(['/administrativo']);
    } else if (this.usuarioLocal.rol === 'USER') {
      this.router.navigate(['/docente']);
    } else {
      console.log('Error al iniciar');
      this.router.navigate(['/login']);
    }
  }

}
