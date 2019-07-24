import { ThemeModule } from './theme/theme.module';
import { HomeComponent } from './theme/components/index';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/container/index';
import { ProductModule } from './pages/product/product.module';

const MODULES = [
  ProductModule,
  ThemeModule
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }/* ,
  {
    path: 'compras',
    component: 
  } */
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
