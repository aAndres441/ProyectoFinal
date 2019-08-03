<<<<<<< HEAD

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Para utilizar la API de formularios reactivos 
/* import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
 */



import {
  ProductComponent
} from './container';

import {
  ProductListComponent,
  ProductFormComponent,
  ProductDetailComponent
} from './components';

=======
import { ProductListComponent,ProductFormComponent,ProductDetailComponent } from './components/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './container/index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
>>>>>>> b3207864e932ce850ca151574599540d00319710

const APP_COMPONENTS_PRODUCTS = [
  ProductFormComponent,
  ProductListComponent,
  ProductDetailComponent
<<<<<<< HEAD
];
=======
]
>>>>>>> b3207864e932ce850ca151574599540d00319710
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
    SharedModule,
    RouterModule,
    ReactiveFormsModule
    /* 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, */
    
    
=======
    ReactiveFormsModule,
    FormsModule
>>>>>>> b3207864e932ce850ca151574599540d00319710
  ]
})
export class ProductModule { }
