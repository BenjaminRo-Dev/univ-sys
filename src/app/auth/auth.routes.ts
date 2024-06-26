import { Routes } from "@angular/router";
// import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { PerfilComponent } from "./perfil/perfil.component";

export const AUTH_ROUTES: Routes = [
    // { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfil/:id', component: PerfilComponent },
    { path: '', component: LoginComponent }

];