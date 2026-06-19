import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {
  constructor(private auth: Auth, private router: Router) {}

  cerrarSesion(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}