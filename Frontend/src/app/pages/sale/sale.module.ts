import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import {
  SaleDetailComponent,
  SaleNewComponent,
  SaleListComponent
} from './components';

import {
  SaleComponent
} from './container';

const APP_COMPONENT_SALE = [
  SaleDetailComponent,
  SaleNewComponent,
  SaleListComponent
]

const APP_CONTAINER_SALE = [
  SaleComponent
]

@NgModule({
  declarations: [
    ...APP_COMPONENT_SALE,
    ...APP_CONTAINER_SALE
  ],

  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SaleModule { }
