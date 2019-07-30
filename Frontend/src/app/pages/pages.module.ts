import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';
import { ThemeModule } from '../theme/theme.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const PAGES_MODULES = [
  ProductModule,
  ThemeModule
];

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    ...PAGES_MODULES
  ]
})
export class PagesModule { }
