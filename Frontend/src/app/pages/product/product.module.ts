<<<<<<< HEAD
import { ProductListComponent,ProductFormComponent,ProductDetailComponent } from './components/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './container/index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
=======

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
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047

const APP_COMPONENTS_PRODUCTS = [
  ProductFormComponent,
  ProductListComponent,
  ProductDetailComponent
<<<<<<< HEAD
]
=======
];
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
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
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule
=======
    SharedModule,/* 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, */
    RouterModule
    
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
  ]
})
export class ProductModule { }
