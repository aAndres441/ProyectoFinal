
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { ProductoService } from './services/producto.service';
import { EmployeeService } from './services/employee.service';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { ProductModule } from './pages/product/product.module';
/* 
import { EmployeeModule } from './pages/employee/employee.module';
import { ShippingModule} from './pages/shipping/shipping.module';
import { SaleModule} from './pages/sale/sale.module';
import { BuyModule} from './pages/buy/buy.module';
import { ClientModule } from './pages/client/client.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 */
const PAGES_MODULES = [
  ProductModule,
  SharedModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...PAGES_MODULES

    /* EmployeeModule,
    ShippingModule,    
    SaleModule,
    BuyModule,
    ClientModule,
    BrowserAnimationsModule */
  ],
  providers: [
    ProductoService,
    EmployeeService
  ],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
