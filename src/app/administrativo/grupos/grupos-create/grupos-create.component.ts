import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../core/services/user/user.service';
import { MateriaService } from '../../../core/services/materia/materia.service';
import { GrupoService } from '../../../core/services/grupo/grupo.service';

@Component({
  selector: 'app-grupos-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './grupos-create.component.html',
  styleUrl: './grupos-create.component.css'
})
export class GruposCreateComponent {
  private fb = inject(FormBuilder);
  private grupoService = inject(GrupoService);
  private router = inject(Router);

  private userService = inject(UserService);
  private materiaService = inject(MateriaService);

  users: any[] = [];
  usuariosDocentes: any[] = [];
  materias: any[] = [];

  hayError: boolean = false;

  form = this.fb.group({
    nombre: [''],
    periodo: [''],
    materia: [''],
    user: [''],
  });

  ngOnInit(): void {
    this.getUsers();
    this.getMaterias();
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe((response: any) => {
        this.users = response.data;
        this.filterDocentes();
      });
  }

  getMaterias(){
    this.materiaService.getMaterias()
      .subscribe((response: any) => {
        this.materias = response.data;
      });
  }

  filterDocentes() {
    this.usuariosDocentes = this.users.filter(user => user.rol === 'USER');
    // console.log(this.usuariosDocentes);
  }
  
  create(){
    // console.log(this.form.value);
    let request = this.grupoService.guardarGrupo(this.form.value);

    request.subscribe({
      next: (response: any) => {
        console.log(response);
        console.log('Grupo creado'); 
        this.router.navigate(['/administrativo/grupos']);
      },
      error: response => {
        this.hayError = true;
        console.log('Error al guardar');
        console.log(response);
      }
    })

  } 


} 
