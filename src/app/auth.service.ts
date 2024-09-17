import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios = [
    { username: 'Lautaro', password: '123', role: 'admin' },
    { username: 'usuario', password: '123', role: 'user' }
  ];

  private loggedInUser: any = null;

  constructor() { }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  isAdmin(): boolean {
    return this.loggedInUser && this.loggedInUser.role === 'admin';
  }

  login(username: string, password: string): boolean {
    const user = this.usuarios.find(u => u.username === username && u.password === password);

    if (user) {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {

      const newUser = { username, password, role: 'user' };
      this.usuarios.push(newUser);
      this.loggedInUser = newUser;
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
  }

  logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('user');
  }

  restoreSession(): void {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.loggedInUser = JSON.parse(savedUser);
    }
  }
}
