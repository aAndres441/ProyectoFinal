import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {EmployeeListComponent,EmployeeFormComponent,EmployeeDetailComponent} from './components/index'
import {EmployeeComponent} from './container/index'

const APP_COMPONENTS_PRODUCTS = [
  EmployeeDetailComponent,
  EmployeeFormComponent,
  EmployeeListComponent
]
const APP_CONTAINERS_PRODUCTS = [
  EmployeeComponent
]

@NgModule({
  declarations: [
    ...APP_COMPONENTS_PRODUCTS,
    ...APP_CONTAINERS_PRODUCTS
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
=======
import {SharedModule} from '../../shared/shared.module';

import {
  EmployeeListComponent,
   DocumentsComponent,
   AddEmployeeComponent,
   AddressComponent,
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
    CommonModule,
    SharedModule
  ],
 
  })
  export class EmployeeModule { }
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
