import { Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { RouterLink } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-usuarios-index',
  standalone: true,
  imports: [RouterLink],
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

  fileName = 'Usuarios.xlsx';
  exportarExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.usuarios);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios');
    XLSX.writeFile(wb, this.fileName);
  }

}
