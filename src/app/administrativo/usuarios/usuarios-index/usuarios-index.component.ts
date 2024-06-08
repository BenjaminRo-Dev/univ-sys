import { Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-usuarios-index',
  standalone: true,
  imports: [],
  templateUrl: './usuarios-index.component.html',
  styleUrl: './usuarios-index.component.css'
})
export class UsuariosIndexComponent {
  private userService = inject(UserService);

  usuarios: any[] = [];

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((response: any) => {
        this.usuarios = response;
      });
    
  }

}
