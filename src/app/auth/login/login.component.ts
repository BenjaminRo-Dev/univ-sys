import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);
  public errors: string[] = [];
  public hayError: boolean = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  

  login() {
    // console.log(this.form.value);

    let request = this.userService.login(this.form.value)

    request.subscribe({
      next: (response: any) => {
        // this.errors = [];
        localStorage.setItem('user', JSON.stringify(response));
        if(response.rol == 'ADMIN') {
          this.router.navigate(['/administrativo']);
        }else if(response.rol == 'USER') {
          console.log('Usuario');
          this.router.navigate(['/docente']);
        }else{
          console.log('Error al iniciar');
        }
      },
      error: response => {
        this.hayError = true;
        console.log('Error al iniciar');
        // console.log(response);
      }
    })

    // this.userService.login(this.form.value)
    //   .subscribe((response: any) => {
    //     if(response.rol == 'ADMIN') {
    //       console.log('Administrador');
    //       this.router.navigate(['/administrativo']);
    //     }else if(response.rol == 'USER') {
    //       console.log('Usuario');
    //       this.router.navigate(['/docente']);
    //     }else{
    //       console.log('Error al iniciar');
    //     }
    //   });
    

  }
}
