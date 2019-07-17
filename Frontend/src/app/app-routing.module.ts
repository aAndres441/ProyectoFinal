
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductFormComponent } from './pages/product/components/product-form/product-form.component';
// import { ProductListComponent } from './pages/product/components/product-list/product-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product/components';
import { ProductComponent } from './pages/product/container/product/product.component';
import { ProductModule } from './pages/product/product.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',  // determinada para cuando se carga la app
    pathMatch: 'full'
  },

  /* {path: ' ** ',
   redirectTo: 'producto' ,
   pathMatch: 'full'  // determinada por si n o coincide ninguna direccion ,Usada para pag 404     
  }, */

  {
    path: 'productos',
    component: HomeComponent  // renderiza componente importado
  },

  {
    path: 'producto/add',
    component: ProductFormComponent
  },
  {
    path: 'producto/edit/:id',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule ,
    ReactiveFormsModule ,
   ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
