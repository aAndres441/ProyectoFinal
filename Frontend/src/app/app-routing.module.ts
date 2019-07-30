
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductFormComponent } from './pages/product/components/product-form/product-form.component';
import { ProductListComponent } from './pages/product/components/product-list/product-list.component';
import { ProductComponent } from './pages/product/container/index';
import { ProductModule } from './pages/product/product.module';

import { HomeComponent } from './pages/home/home.component';

import { EmployeeComponent } from './pages/employee/containers/employee/employee.component';

import { ShippingComponent } from './pages/shipping/container/shipping/shipping.component';
import { SaleComponent } from './pages/sale/container';
import { BuyComponent } from './pages/buy/container';
/*import { 
  ProductFormComponent,
  ProductDetailComponent,
  ProductListComponent
 } from './pages/product/components/index';*/
 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // determinada para cuando se carga la app
    pathMatch: 'full'
  },

   {
    path: ' ** ',
    redirectTo: 'home',
    pathMatch: 'full'  // determinada por si n o coincide ninguna direccion ,Usada para pag 404
  },

  {
    path: 'home',
    component: HomeComponent  // renderiza componente importado
  },

  {
    path: 'productos',
    component: ProductComponent  // renderiza componente importado
  },

  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'producto/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule ,
    ReactiveFormsModule ,
   ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
