import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/horarios']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

  ngOnInit() {
    this.authService.restoreSession();
  }
}
