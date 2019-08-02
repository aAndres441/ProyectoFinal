import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {
  ClientDataComponent,
  ClientListComponent
} from './components';

import {
  ClientComponent
} from './container';

const APP_COMPONENT_CLI = [
  ClientDataComponent,
  ClientListComponent
];

const APP_CONTAINERS_CLI = [
  ClientComponent
];

@NgModule({
  declarations: [
    ...APP_COMPONENT_CLI,
    ...APP_CONTAINERS_CLI
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ClientModule { }
