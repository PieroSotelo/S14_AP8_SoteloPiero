import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { Artistas } from './pages/artistas/artistas';
import { Albumes } from './pages/albumes/albumes';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: InicioComponent, canActivate: [authGuard] },
  { path: 'artistas', component: Artistas, canActivate: [authGuard] },
  { path: 'albumes', component: Albumes, canActivate: [authGuard] },
  { path: 'contacto', component: Contacto, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];