// src/app/guards/lautaro.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LautaroGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const isAdmin = this.authService.isAdmin();
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    if (!isAdmin) {
      alert('No tienes acceso a esta sección.');
      this.router.navigate(['/horarios']);
      return false;
    }

    return true;
  }
}
