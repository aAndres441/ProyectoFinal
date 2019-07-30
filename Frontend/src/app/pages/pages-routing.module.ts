import { HomeComponent } from './../theme/components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/container/product/product.component';

import { PagesComponent } from './pages.component';

  
  const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'productos',
        component: ProductComponent
      }
    ]}
  ];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }