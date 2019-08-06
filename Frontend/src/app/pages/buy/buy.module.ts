import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../shared/shared.module';

import {
  BuyDetailComponent,
  BuyListComponent,
  BuyNewComponent
} from './components';

import {
  BuyComponent
} from './container';

const APP_COMPONENT_BUY =[
  BuyDetailComponent,
  BuyListComponent,
  BuyNewComponent
]

const APP_CONTAINER_BUY =[
  BuyComponent
]

@NgModule({
  declarations: [
    APP_COMPONENT_BUY,
    APP_CONTAINER_BUY
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BuyModule { }
