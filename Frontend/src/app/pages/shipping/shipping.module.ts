import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {
  ShippingFormComponent,
  ShippingListComponent
} from './components';

import {
  ShippingComponent
} from './container';

const APP_COMPONENTS_SHIPPING = [
  ShippingFormComponent,
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
    CommonModule,
    SharedModule
  ]
})
export class ShippingModule { }
