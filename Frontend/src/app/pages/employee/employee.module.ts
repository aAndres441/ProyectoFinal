import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import {
  EmployeeListComponent
  } from './components';

import { EmployeeComponent } from './container';
import { DocumentsComponent } from './components/documents/documents.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddressComponent } from './components/address/address.component';

const APP_COMPONENTS_EMPLOYEE = [
  DocumentsComponent,
  EmployeeListComponent,
  AddEmployeeComponent,
  AddressComponent
];
const APP_CONTAINERS_EMPLOYEE = [
  EmployeeComponent
];

@NgModule({
   
  declarations: [
    ...APP_COMPONENTS_EMPLOYEE,
    ...APP_CONTAINERS_EMPLOYEE
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
 
  })
  export class EmployeeModule { }
