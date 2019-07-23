import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { ProductComponent } from './container'; */
import { ProductComponent } from './container/product/product.component';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';

const APP_COMPONENTS_PRODUCTS = [
  ProductFormComponent,
  ProductListComponent
];
const APP_CONTAINERS_PRODUCTS = [
  ProductComponent
];

@NgModule({
  declarations: [
    ...APP_COMPONENTS_PRODUCTS,
    ...APP_CONTAINERS_PRODUCTS,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
