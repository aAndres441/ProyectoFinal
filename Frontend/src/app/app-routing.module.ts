
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }