import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoListComponent } from './components/producto-list/producto-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'producto',
    pathMatch: 'full'
  },
  {
    path: 'producto',
    component: ProductoListComponent
  },
  {
    path: 'producto/add',
    component: ProductoFormComponent
  },
  {
    path: 'producto/edit/:id',
    component: ProductoFormComponent
  },
  {
    path: 'producto/getOne/:id',
    component: ProductoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
