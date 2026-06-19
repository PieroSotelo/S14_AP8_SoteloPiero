import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly EMAIL_VALIDO = 'admin@miapp.com';
  private readonly PASSWORD_VALIDO = '123456';

  login(email: string, password: string): boolean {
    if (email === this.EMAIL_VALIDO && password === this.PASSWORD_VALIDO) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}