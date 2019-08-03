import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InicioComponent } from './shared/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full' // determinada para cuando se carga la app
  },

  {
    path: '**',
    redirectTo: 'layout' // determinada por si n o coincide ninguna direccion ,Usada para pag 404
  },

  {
    path: 'inicio',
    component: InicioComponent
  },

  {
    path: 'layout',
    loadChildren: '../app/pages/pages.module#PagesModule'
  }

=======
import { InicioComponent } from './theme/components/inicio/inicio.component';

const routes: Routes = [
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'layout', loadChildren: '../app/pages/pages.module#PagesModule'},
  { path: '**', redirectTo: 'layout' }
>>>>>>> b3207864e932ce850ca151574599540d00319710
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
<<<<<<< HEAD
  exports: [RouterModule],
=======
  exports: [ RouterModule ],
>>>>>>> b3207864e932ce850ca151574599540d00319710
})
export class AppRoutingModule { }