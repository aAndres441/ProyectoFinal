import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ShippingAddComponent,
  ShippingListComponent
} from './components';

import {
  ShippingComponent
} from './container';

const APP_COMPONENTS_SHIPPING = [
  ShippingAddComponent,
  ShippingListComponent
];
const APP_CONTAINERS_SHIPPING = [
  ShippingComponent
];

@NgModule({
  declarations: [
    ...APP_COMPONENTS_SHIPPING,
    ...APP_CONTAINERS_SHIPPING
  ],

  imports: [
    CommonModule
  ]
})
export class ShippingModule { }
