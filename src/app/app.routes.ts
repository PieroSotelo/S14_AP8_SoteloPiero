import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { Artistas } from './pages/artistas/artistas';
import { Albumes } from './pages/albumes/albumes';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'artistas', component: Artistas },
  { path: 'albumes', component: Albumes },
  { path: 'contacto', component: Contacto},
  { path: '**', redirectTo: '' }
];