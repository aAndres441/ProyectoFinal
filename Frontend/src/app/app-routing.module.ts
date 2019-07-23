import { ThemeModule } from './theme/theme.module';
import { HomeComponent } from './theme/components/home/home.component';
import { ProductComponent } from './pages/product/container/product/product.component';
import { ProductModule } from './pages/product/product.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  ProductModule,
  ThemeModule
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },/* 
  {
    path: 'productos',
    component: ProductComponent
  }, */
  {
    path: 'home',
    component: HomeComponent
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
