import { ProductComponent } from './pages/product/container/product/product.component';
import { ProductListComponent } from './pages/product/components/product-list/product-list.component';
import { ProductModule } from './pages/product/product.module';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './pages/product/components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  ProductModule
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'producto/add',
    component: ProductFormComponent
  },
  {
    path: 'producto/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'productos',
    component: ProductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    ...MODULES
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
