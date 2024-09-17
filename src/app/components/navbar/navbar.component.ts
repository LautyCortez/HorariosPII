import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) { }

  verificarAccesoAgregarHorario() {
    const isLoggedIn = this.authService.isLoggedIn();
    const isAdmin = this.authService.isAdmin();

    if (!isLoggedIn) {
      this.router.navigate(['./login']);
    } else if (isAdmin) {

      this.router.navigate(['/agregar-horario']);
    } else {

      alert('No tienes acceso para agregar horarios. Solo los administradores pueden acceder.');
    }
  }

}
