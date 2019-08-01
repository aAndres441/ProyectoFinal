
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
/* import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Para utilizar la API de formularios reactivos 
 */
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule, Routes} from '@angular/router';

import {
  ProductComponent
} from './container';

import {
  ProductListComponent,
  ProductFormComponent,
  ProductDetailComponent
} from './components';

const APP_COMPONENTS_PRODUCTS = [
  ProductFormComponent,
  ProductListComponent,
  ProductDetailComponent
];
const APP_CONTAINERS_PRODUCTS = [
  ProductComponent
];

@NgModule({
  declarations: [
    ...APP_COMPONENTS_PRODUCTS,
    ...APP_CONTAINERS_PRODUCTS
  ],
  imports: [
    CommonModule,
    SharedModule,/* 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, */
    RouterModule
    
  ]
})
export class ProductModule { }
