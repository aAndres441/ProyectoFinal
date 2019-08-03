
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductoService} from './services/producto.service';
import { ThemeModule } from './theme/theme.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { ProductModule } from './pages/product/product.module';

const PAGES_MODULES = [
  ProductModule,
  ThemeModule
];

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    RouterModule,
    ...PAGES_MODULES
  ],
  providers: [
    ProductoService,
    EmployeeService
  ],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
