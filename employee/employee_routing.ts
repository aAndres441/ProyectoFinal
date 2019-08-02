import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './containers';
import { EmployeeListComponent } from './components';

const routes: Routes = [{
    path: '',
    component: EmployeeListComponent,
    children: [
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      },
      /* {
        path: 'new',
        component: StepOneComponent,
        data: {
          breadcrumb: 'Step One Component'
        },
      },
      {
        path: 'new/step-2',
        component: StepTwoComponent,
        data: {
          id: 2,
          breadcrumb: 'Step two Component'
        },
      } */
    ]
  }];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeedRoutingModule { }