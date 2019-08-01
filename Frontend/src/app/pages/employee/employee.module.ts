import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
