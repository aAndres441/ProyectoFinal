import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULOS DE PAGINAS
import { ProductModule } from './product/product.module';

import { EmployeeModule } from './employee/employee.module';
import { SharedModule } from '../shared/shared.module';
import { ShippingModule } from './shipping/shipping.module';
import { SaleModule } from './sale/sale.module';
import { BuyModule } from './buy/buy.module';
import { ClientModule } from './client/client.module';

const PAGES_MODULES = [
  SharedModule,
  ProductModule,
  EmployeeModule,
  EmployeeModule,
  ShippingModule,
  SaleModule,
  BuyModule,
  ClientModule
];

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...PAGES_MODULES
  ]
})
export class PagesModule { }
