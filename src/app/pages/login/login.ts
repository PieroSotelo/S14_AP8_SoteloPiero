import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  errorMessage = '';

  constructor(private auth: Auth, private router: Router) {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor completa el formulario correctamente.';
      return;
    }

    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';

    const exito = this.auth.login(email, password);

    if (exito) {
      this.errorMessage = '';
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos.';
    }
  }
}