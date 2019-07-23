import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent,
   DocumentsComponent,
   AddEmployeeComponent,
   AddressComponent
  } from './components';
import { EmployeeComponent } from './containers';

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
    CommonModule
  ]
  })
  export class EmployeeModule { }