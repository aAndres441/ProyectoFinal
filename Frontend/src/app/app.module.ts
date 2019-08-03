
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
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
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductoService} from './services/producto.service';
import { ThemeModule } from './theme/theme.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PAGES_MODULES = [
  ProductModule,
  ThemeModule
>>>>>>> b3207864e932ce850ca151574599540d00319710
];

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
<<<<<<< HEAD
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
=======
    RouterModule,
    ...PAGES_MODULES
>>>>>>> b3207864e932ce850ca151574599540d00319710
  ],
  providers: [
    ProductoService,
    EmployeeService
  ],
  bootstrap: [AppComponent],
<<<<<<< HEAD

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

=======
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
>>>>>>> b3207864e932ce850ca151574599540d00319710
})
export class AppModule { }
