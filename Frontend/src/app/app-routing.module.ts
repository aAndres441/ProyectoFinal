import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { InicioComponent } from './theme/components/inicio/inicio.component';

const routes: Routes = [
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'layout', loadChildren: '../app/pages/pages.module#PagesModule'},
  { path: '**', redirectTo: 'layout' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductFormComponent } from './pages/product/components/product-form/product-form.component';
// import { ProductListComponent } from './pages/product/components/product-list/product-list.component';

import { ProductListComponent } from './pages/product/components';
import { ProductComponent } from './pages/product/container/product/product.component';
import { ProductModule } from './pages/product/product.module';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // determinada para cuando se carga la app
    pathMatch: 'full'
  },

   {
    path: ' ** ',
   redirectTo: 'home' ,
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
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
})
export class AppRoutingModule { }
