<<<<<<< HEAD
import { HomeComponent } from '../shared/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/container/index';
import { EmployeeComponent } from './employee/containers/index';
import { ShippingComponent } from './shipping/container/index';
import { SaleComponent } from './sale/container/index';
import { BuyComponent } from './buy/container/index';


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
  ]
}
];
=======
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
>>>>>>> b3207864e932ce850ca151574599540d00319710

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }