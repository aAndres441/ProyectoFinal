import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MODULOS DE PAGINAS
import { ProductModule } from './product/product.module';
import { ThemeModule } from '../theme/theme.module';
import { EmployeeModule } from './employee/employee.module';

const PAGES_MODULES = [
  ProductModule,
  EmployeeModule,
  ThemeModule
];

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...PAGES_MODULES
  ]
})
export class PagesModule { }
