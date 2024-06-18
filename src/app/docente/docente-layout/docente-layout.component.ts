import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocenteNavbarComponent } from '../docente-navbar/docente-navbar.component';
import { NotificationComponent } from "../../notification/notification.component";

@Component({
    selector: 'app-docente-layout',
    standalone: true,
    templateUrl: './docente-layout.component.html',
    styleUrl: './docente-layout.component.css',
    imports: [RouterOutlet, DocenteNavbarComponent, NotificationComponent]
})
export class DocenteLayoutComponent {

}
