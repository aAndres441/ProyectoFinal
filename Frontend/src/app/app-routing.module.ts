
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './pages/product/components/product-form/product-form.component';
import { ProductListComponent } from './pages/product/components/product-list/product-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'producto',  // determinada para cuando se carga la app
    pathMatch: 'full'
  },

  /* {path: ' ** ',
   redirectTo: 'producto' ,
   pathMatch: 'full'  // determinada por si n o coincide ninguna direccion ,Usada para pag 404     
  }, */

  {
    path: 'producto',
    component: ProductListComponent  // renderiza componente importado
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
